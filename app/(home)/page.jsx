import CinematicPortfolio from "@/components/CinematicPortfolio";
import { getGitHubData } from "@/lib/githubPortfolio";
export const revalidate = 900;
export const metadata = {
  title: "A.J. Muhris — AI Engineering & Real-World Systems",
  description: "A.J. Muhris: data science, full-stack software and practical AI systems built around real-world problems."
};
export default async function Home() {
  const github = await getGitHubData();
  return <CinematicPortfolio github={github} />;
}
