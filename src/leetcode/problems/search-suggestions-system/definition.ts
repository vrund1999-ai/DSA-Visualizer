import type { LeetCodeProblem } from "../../types";
import type { SuggestData } from "./algorithm";
import { suggestSteps } from "./algorithm";
import { CODE } from "./code";
import { SuggestRenderer } from "./SuggestRenderer";

interface SuggestInput {
  products: string[];
  searchWord: string;
}

export const searchSuggestionsSystemProblem: LeetCodeProblem<SuggestInput, SuggestData, Record<string, never>> = {
  id: "search-suggestions-system",
  number: 1268,
  title: "Search Suggestions System",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/search-suggestions-system/",
  summary: "Sort the catalog once; after each keystroke the top-3 matches are the first products with that prefix.",
  prompt:
    "Given a list of product names and a search word, after each typed character return up to three " +
    "lexicographically smallest products that start with the prefix typed so far.",
  topics: ["Array", "String", "Trie", "Sorting", "Binary Search"],
  tags: ["Trie", "Sorting", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(N log N + L·N)", timeWorst: "O(N log N + L·N)", space: "O(N)" },
  inputSchema: [],
  makeDefaultInput: () => ({ products: ["mobile", "mouse", "moneypot", "monitor", "mousepad"], searchWord: "mouse" }),
  defaultOptions: {},
  buildSteps: (input) => suggestSteps(input.products, input.searchWord),
  Renderer: SuggestRenderer,
};
