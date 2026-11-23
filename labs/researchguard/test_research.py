"""Offline unit tests: all network calls are mocked."""
import unittest
from unittest.mock import patch
from research import search_papers, verify_doi, evidence_report, similarity

class ResearchGuardTest(unittest.TestCase):
    def test_title_similarity(self):
        self.assertEqual(similarity("AI for Climate", "AI for Climate"), 1.0)
        self.assertEqual(similarity("", "AI for Climate"), 0.0)
    def test_bad_doi_rejected(self):
        with patch("research._fetch") as fetch:
            self.assertFalse(verify_doi("https://example.com")["verified"])
            fetch.assert_not_called()
    def test_search_ranking(self):
        sample = {"message": {"items": [
            {"DOI": "10.1234/example", "title": ["AI for Climate"], "published": {"date-parts": [[2025]]}}
        ]}}
        with patch("research._fetch", return_value=sample):
            result = search_papers("AI for Climate")
        self.assertEqual(len(result["papers"]), 1)
        self.assertEqual(result["papers"][0]["score"], 1.0)
    def test_report_is_cautious(self):
        with patch("research.search_papers", return_value={"topic": "AI", "papers": []}):
            self.assertTrue(evidence_report("AI")["limitations"])

if __name__ == "__main__":
    unittest.main()
