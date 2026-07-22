import type { LeetCodeProblem } from "../../types";
import type { ValidPalindromeData } from "./algorithm";
import { validPalindromeSteps } from "./algorithm";
import { CODE } from "./code";
import { ValidPalindromeRenderer } from "./ValidPalindromeRenderer";

export const validPalindromeProblem: LeetCodeProblem<
  string,
  ValidPalindromeData,
  Record<string, never>
> = {
  id: "valid-palindrome",
  number: 125,
  title: "Valid Palindrome",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/valid-palindrome/",
  summary: "Ignore case/punctuation, then two-pointer check.",
  prompt:
    "A phrase is a palindrome if, after lowercasing and removing non-alphanumeric " +
    "characters, it reads the same forward and backward. Given `s`, return true " +
    "if it is a palindrome.",
  topics: ["Two Pointers", "String"],
  tags: ["Two Pointers", "String"],
  companies: ["Bloomberg"],
  frequency: 63.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "A man, a plan, a canal: Panama",
  defaultOptions: {},
  buildSteps: (input) => validPalindromeSteps(input),
  Renderer: ValidPalindromeRenderer,
};
