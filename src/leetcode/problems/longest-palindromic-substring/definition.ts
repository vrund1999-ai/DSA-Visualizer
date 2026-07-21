import type { LeetCodeProblem } from "../../types";
import type { PalindromeData } from "./algorithm";
import { palindromeSteps } from "./algorithm";
import { CODE } from "./code";
import { PalindromeRenderer } from "./PalindromeRenderer";

export const longestPalindromicSubstringProblem: LeetCodeProblem<
  string,
  PalindromeData,
  Record<string, never>
> = {
  id: "longest-palindromic-substring",
  number: 5,
  title: "Longest Palindromic Substring",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-palindromic-substring/",
  summary: "Longest mirror-symmetric substring via center expansion.",
  prompt:
    "Given a string `s`, return the longest palindromic substring in `s`.",
  topics: ["Two Pointers", "String", "Dynamic Programming"],
  tags: ["Two Pointers", "String", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 80.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "babad",
  defaultOptions: {},
  buildSteps: (input) => palindromeSteps(input),
  Renderer: PalindromeRenderer,
};
