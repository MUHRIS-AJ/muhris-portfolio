# ResearchGuard — MCP prototype

**Problem:** People struggle to verify paper citations and identify reliable sources.

**Included:** a working, read-only Crossref discovery library; DOI metadata verification; a cautious evidence shortlist; 3 MCP tools; offline unit tests.

**Not yet included:** autonomous AI agents, a user-facing dashboard, full-text claim validation, real contradiction detection, or production hosting. The roles in the code are deterministic, not autonomous.

## Run locally

1. Open a terminal in labs/researchguard.
2. Install: python -m pip install -r requirements.txt
3. Test: python -m unittest discover -p 'test_*.py' -v
4. Start MCP Inspector: mcp dev server.py
5. Call discover_research_papers with topic = climate change; or check_doi_metadata with a valid DOI.

Requires Python 3.10+ and the official MCP Python SDK v2. Uses the public Crossref REST API, subject to its terms and rate limits. No model provider key is required.

## Planned extensions
- Cross-check against OpenAlex.
- Parse permitted PDFs and cite evidence spans.
- Implement separate LLM-powered discovery and verification agents.
- Evaluate precision/recall and citation-support accuracy on labeled examples.

## Safety
Read-only outbound calls to api.crossref.org. No arbitrary URL fetching or secret storage. DOI metadata alone does not verify that a study supports a specific claim.
