# A.J. Muhris — AI Engineering Portfolio

A cinematic, accessible Next.js portfolio showcasing actual public GitHub work, learning records, and an evidence-first roadmap for MCP and multi-agent AI systems.

## What this branch delivers
- New homepage inspired by neon coastal cinematography, with original gradients, glass panels and responsive layouts. No copied game assets or branding.
- Existing personal portrait loaded from public/profile-main.jpg.
- GitHub and LinkedIn links.
- A curated showcase plus recent public repository discovery through GitHub's public REST API.
- Server-side GitHub cache revalidation every 900 seconds (not instant webhook sync).
- Six credentials **listed in the previous portfolio**, clearly marked as issuer verification pending.
- An AI engineering workflow and research/agent backlog.
- A ResearchGuard read-only MCP prototype using free Crossref paper metadata.
- GitHub Actions checks for Next.js production build and Python unit tests.

## Run the website
1. Install Node.js 20 and Git.
2. Clone: git clone https://github.com/MUHRIS-AJ/muhris-portfolio.git
3. Enter: cd muhris-portfolio
4. Switch to this branch: git switch feat/ai-control-room-2026
5. Install: npm ci
6. Start: npm run dev
7. Visit http://localhost:3000

To test the production build, run npm run build.

## Live GitHub sync
The server fetches public repositories for MUHRIS-AJ. It filters archived, forked and empty projects, then shows a curated subset and recently pushed repositories. The cached feed revalidates on the next supported server request after 900 seconds. A hosting service must support Next.js server-side caching and revalidation. If the API fails, verified names from the November 2026 repository audit appear as a fallback. Private repositories are never requested.

## MCP tool prototype
See labs/researchguard/README.md. It contains an actual MCPServer (official SDK v2), three read-only metadata tools, and offline unit tests. It does not yet contain autonomous LLM agents.

## How I work with AI
I use AI for research planning, architecture alternatives, coding assistance and test generation. I validate output with evidence and tests before presenting it as complete. See docs/AI_WORKFLOW.md and AGENTS.md.

## Project and repository governance
- docs/PROJECT_AUDIT.md: which existing repositories should be featured and which require manual review.
- docs/AGENT_PROJECTS.md: prioritized global problem-solving projects, APIs and MVP metrics.
- AGENTS.md: multi-agent development roles, permissions and review gates.

No repositories were deleted, archived or made public as part of this redesign. New project repositories should be created after a tested MVP exists.

## Credentials and professional profile
GitHub: https://github.com/MUHRIS-AJ
LinkedIn: https://www.linkedin.com/in/muhrees-abool-jayah-975220350/

Listed credentials are sourced from the repository's previous configuration. They are not represented as issuer-verified badges without supporting credential links.

## Limitations
Live hosting, domain setup, certificate verification, access to private LinkedIn certifications, automatic GitHub Actions deployment and any autonomous production AI agents still require additional setup or approval.
