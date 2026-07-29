import type { LeetCodeProblem } from "../../types";
import type { LPSData } from "./algorithm";
import { lpsSteps } from "./algorithm";
import { CODE } from "./code";
import { LPSRenderer } from "./LPSRenderer";

export const longestPalindromicSubsequenceProblem: LeetCodeProblem<string, LPSData, Record<string, never>> = {
  id: "longest-palindromic-subsequence",
  number: 516,
  title: "Longest Palindromic Subsequence",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
  summary: "Interval DP: matching ends add 2 to the inner result; otherwise take the better of dropping an end.",
  prompt: "Given a string s, return the length of its longest palindromic subsequence.",
  topics: ["String", "Dynamic Programming"],
  tags: ["String", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => "bbbab",
  defaultOptions: {},
  buildSteps: (input) => lpsSteps(input),
  Renderer: LPSRenderer,
};
