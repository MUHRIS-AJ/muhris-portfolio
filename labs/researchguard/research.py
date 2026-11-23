"""Crossref metadata pipeline for a read-only MCP prototype."""
from __future__ import annotations
import json
import re
from difflib import SequenceMatcher
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, quote
from urllib.request import Request, urlopen

API = "https://api.crossref.org"
DOI_RE = re.compile(r"^10\.\d{4,9}/\S{1,180}$", re.I)

def _fetch(path: str, params: dict | None = None) -> dict:
    url = API + path + ("?" + urlencode(params) if params else "")
    req = Request(url, headers={"Accept": "application/json", "User-Agent": "ResearchGuard/0.1 educational MCP"})
    try:
        with urlopen(req, timeout=12) as response:
            return json.load(response)
    except HTTPError as exc:
        return {"error": "Crossref HTTP " + str(exc.code)}
    except (URLError, TimeoutError, ValueError) as exc:
        return {"error": "Crossref unavailable: " + str(exc)}

def _norm(value: str) -> str:
    return " ".join(re.sub(r"[^a-z0-9 ]", " ", value.lower()).split())

def similarity(query: str, title: str) -> float:
    return round(SequenceMatcher(None, _norm(query), _norm(title)).ratio(), 3) if query and title else 0.0

def search_papers(topic: str, limit: int = 5) -> dict:
    """Discovery role: fetch publication metadata from Crossref."""
    if not isinstance(topic, str) or not 3 <= len(topic.strip()) <= 200:
        return {"error": "Topic must be 3–200 characters."}
    limit = max(1, min(int(limit), 10))
    response = _fetch("/works", {"query.title": topic.strip(), "rows": limit * 3})
    if "error" in response:
        return response
    found = []
    for item in response.get("message", {}).get("items", []):
        title = (item.get("title") or [""])[0]
        doi = item.get("DOI", "")
        if not title or not doi:
            continue
        found.append({
            "title": title, "doi": doi,
            "url": "https://doi.org/" + doi,
            "year": (item.get("published", {}).get("date-parts", [[None]])[0] or [None])[0],
            "score": similarity(topic, title), "source": "Crossref"
        })
    return {"topic": topic, "papers": sorted(found, key=lambda p: p["score"], reverse=True)[:limit]}

def verify_doi(doi: str) -> dict:
    """Verification role: confirm bibliographic metadata, not full-text claims."""
    if not isinstance(doi, str) or not DOI_RE.fullmatch(doi.strip()):
        return {"verified": False, "reason": "Invalid DOI format"}
    result = _fetch("/works/" + quote(doi.strip(), safe="/"))
    item = result.get("message")
    if not isinstance(item, dict):
        return {"verified": False, "reason": result.get("error", "Not found")}
    return {"verified": True, "doi": item.get("DOI"),
            "title": (item.get("title") or [""])[0],
            "publisher": item.get("publisher"), "source": "Crossref"}

def evidence_report(topic: str, limit: int = 5) -> dict:
    """Report role: return source-linked candidates and clear limitations."""
    result = search_papers(topic, limit)
    if "error" in result:
        return result
    return {"topic": topic, "papers": result["papers"],
            "limitations": [
                "Title relevance does not establish support for a research claim.",
                "Crossref coverage may be incomplete.",
                "Read the full paper before drawing conclusions."
            ]}
