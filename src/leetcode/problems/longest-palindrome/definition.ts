import type { LeetCodeProblem } from "../../types";
import type { LongestPalindromeData } from "./algorithm";
import { longestPalindromeSteps } from "./algorithm";
import { CODE } from "./code";
import { LongestPalindromeRenderer } from "./LongestPalindromeRenderer";

export const longestPalindromeProblem: LeetCodeProblem<
  string,
  LongestPalindromeData,
  Record<string, never>
> = {
  id: "longest-palindrome",
  number: 409,
  title: "Longest Palindrome",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/longest-palindrome/",
  summary: "Longest palindrome buildable from a string's letters.",
  prompt:
    "Given a string `s` of letters, return the length of the longest palindrome " +
    "that can be built using those letters (case-sensitive).",
  topics: ["Hash Table", "String", "Greedy"],
  tags: ["Hash Table", "String", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "abccccdd",
  defaultOptions: {},
  buildSteps: (input) => longestPalindromeSteps(input),
  Renderer: LongestPalindromeRenderer,
};
