"""Official MCP Python SDK v2 read-only tool server."""
from mcp.server import MCPServer
from research import search_papers, verify_doi, evidence_report

mcp = MCPServer("ResearchGuard")

@mcp.tool()
def discover_research_papers(topic: str, limit: int = 5) -> dict:
    """Find matching papers with their official Crossref DOI metadata."""
    return search_papers(topic, limit)

@mcp.tool()
def check_doi_metadata(doi: str) -> dict:
    """Validate DOI bibliographic metadata against Crossref."""
    return verify_doi(doi)

@mcp.tool()
def create_evidence_shortlist(topic: str, limit: int = 5) -> dict:
    """Prepare a sourced candidate list, without claiming full-text verification."""
    return evidence_report(topic, limit)
