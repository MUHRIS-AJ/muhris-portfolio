# MUHRIS AI LAB — Agent Team Protocol

This is a **human-led** AI development workflow. The roles below describe how multiple agents should collaborate; they are not a claim that an autonomous team is deployed.

## Roles
- Research Agent: validate real user problems, constraints, primary sources and datasets.
- Architect Agent: design system boundaries, API contracts, MCP tools, databases and acceptance criteria.
- Builder Agent: make small implementation changes in feature branches.
- QA Agent: test functionality, responsiveness, accessibility and failure scenarios.
- Security Agent: check secrets, permissions, privacy, data quality and unsafe operations.
- Documentation Agent: keep README, setup, demos and limitations accurate.

## Review gate
Research → architecture → code → tests → security review → pull request → human approval → merge.

## Non-negotiable rules
1. No repository deletions or archives without a specific human-reviewed list.
2. Never expose private repos, credentials, personal records or API keys.
3. No forged professional badges, employment claims, certifications or project completion.
4. High-impact write actions require explicit human approval.
5. Prefer read-only MCP tools at first; constrain scopes and record provenance.
6. Label ideas **planned**, experiments **prototype**, and tested apps **working**.
7. Cite official API documentation; do not assume that a free tier permits commercial use.

## Portfolio sync
The live project feed queries only public GitHub repository metadata. Next.js caches and revalidates every 900 seconds, so project changes are reflected after a fresh revalidation and a subsequent visit. It is not an instant webhook sync. The latest available metadata is shown only when the GitHub API succeeds.
