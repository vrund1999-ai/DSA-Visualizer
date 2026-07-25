import type { LeetCodeProblem } from "../../types";
import type { CookiesData } from "./algorithm";
import { cookiesSteps } from "./algorithm";
import { CODE } from "./code";
import { CookiesRenderer } from "./CookiesRenderer";

interface CookiesInput {
  g: number[];
  s: number[];
}

export const assignCookiesProblem: LeetCodeProblem<CookiesInput, CookiesData, Record<string, never>> = {
  id: "assign-cookies",
  number: 455,
  title: "Assign Cookies",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/assign-cookies/",
  summary: "Sort greed and sizes; greedily match smallest cookie to least-greedy child.",
  prompt:
    "Each child i has a greed factor g[i] and each cookie j a size s[j]. A child is " +
    "content if assigned a cookie with size ≥ its greed. Maximize the number of content " +
    "children (each cookie used once).",
  topics: ["Array", "Two Pointers", "Greedy", "Sorting"],
  tags: ["Array", "Two Pointers", "Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ g: [1, 2, 3], s: [1, 1] }),
  defaultOptions: {},
  buildSteps: (input) => cookiesSteps(input.g, input.s),
  Renderer: CookiesRenderer,
};
