import type { LeetCodeProblem } from "../../types";
import type { ValidPalinData } from "./algorithm";
import { validPalinSteps } from "./algorithm";
import { CODE } from "./code";
import { ValidPalinRenderer } from "./ValidPalinRenderer";

export const validPalindromeIIProblem: LeetCodeProblem<string, ValidPalinData, Record<string, never>> = {
  id: "valid-palindrome-ii",
  number: 680,
  title: "Valid Palindrome II",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/valid-palindrome-ii/",
  summary: "Two pointers inward; at the first mismatch, test deleting either side for a palindrome.",
  prompt: "Given a string s, return true if it can become a palindrome after deleting at most one character.",
  topics: ["Two Pointers", "String", "Greedy"],
  tags: ["Two Pointers", "String", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "abca",
  defaultOptions: {},
  buildSteps: (input) => validPalinSteps(input),
  Renderer: ValidPalinRenderer,
};
