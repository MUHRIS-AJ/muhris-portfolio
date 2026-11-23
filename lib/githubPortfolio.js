const PROFILE = "MUHRIS-AJ";
const FEATURED = [
  "M23-AI",
  "AI_Tamil_English_Evaluator",
  "1.-Sales-Business-Insights-Dashboard-DA-Power-BI-",
  "2.-Customer-Segmentation-Unsupervised-ML-",
  "3.-Churn-Prediction-Simple-Classification-",
  "4.-Sri-LankaIndia-Price-Inflation-Trend-Analyzer-Time-Series-Lite-",
  "5.-Job-Market-Skills-Scraper-Insight-Report",
  "M23"
];
const NOTES = {
  "M23-AI": "AI product workspace with research, chat, tools and authentication modules.",
  "AI_Tamil_English_Evaluator": "Bilingual Tamil–English evaluation with Python and R workflows.",
  "1.-Sales-Business-Insights-Dashboard-DA-Power-BI-": "ETL, Python analytics, SQL and visual sales reporting.",
  "2.-Customer-Segmentation-Unsupervised-ML-": "Unsupervised customer grouping using notebook-based analysis.",
  "3.-Churn-Prediction-Simple-Classification-": "Classification models for identifying customer churn signals.",
  "4.-Sri-LankaIndia-Price-Inflation-Trend-Analyzer-Time-Series-Lite-": "Regional price/inflation trend exploration.",
  "5.-Job-Market-Skills-Scraper-Insight-Report": "Exploring demand for technical skills across job postings.",
  "M23": "Python toolkit experiment with packaging, examples and docs."
};
const verifiedFallback = FEATURED.map(name => ({
  id: name,
  name,
  html_url: "https://github.com/" + PROFILE + "/" + name,
  description: NOTES[name],
  language: null,
  stargazers_count: 0,
  updated_at: null,
  homepage: null
}));
export async function getGitHubData() {
  try {
    const response = await fetch(
      "https://api.github.com/users/" + PROFILE + "/repos?per_page=100&sort=updated&type=owner",
      { next: { revalidate: 900 }, headers: { Accept: "application/vnd.github+json", "User-Agent": "muhris-portfolio" } }
    );
    if (!response.ok) throw new Error("GitHub request failed: " + response.status);
    const payload = await response.json();
    if (!Array.isArray(payload)) throw new Error("Invalid GitHub response");
    const repositories = payload.filter(r => !r.private && !r.fork && !r.archived && r.size > 0);
    const byName = new Map(repositories.map(r => [r.name, r]));
    const featured = FEATURED.filter(name => byName.has(name))
      .map(name => ({ ...byName.get(name), description: NOTES[name] || byName.get(name).description }));
    const recent = [...repositories].sort((a,b) =>
      new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at)
    ).slice(0, 12);
    return { featured, recent, totalPublic: repositories.length, live: true };
  } catch (error) {
    console.error("Portfolio GitHub sync:", error.message);
    return { featured: verifiedFallback, recent: [], totalPublic: null, live: false };
  }
}
