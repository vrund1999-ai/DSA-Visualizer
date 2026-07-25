import type { LeetCodeProblem } from "../../types";
import type { ShortestPalinData } from "./algorithm";
import { shortestPalinSteps } from "./algorithm";
import { CODE } from "./code";
import { ShortestPalinRenderer } from "./ShortestPalinRenderer";

export const shortestPalindromeProblem: LeetCodeProblem<string, ShortestPalinData, Record<string, never>> = {
  id: "shortest-palindrome",
  number: 214,
  title: "Shortest Palindrome",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/shortest-palindrome/",
  summary: "KMP prefix function of s#reverse(s) gives the longest palindromic prefix.",
  prompt:
    "Return the shortest palindrome you can make by adding characters only in front of s.",
  topics: ["String", "Hashing", "String Matching", "Rolling Hash"],
  tags: ["String", "String Matching"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "aacecaaa",
  defaultOptions: {},
  buildSteps: (input) => shortestPalinSteps(input),
  Renderer: ShortestPalinRenderer,
};
