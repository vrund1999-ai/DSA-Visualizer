import type { LeetCodeProblem } from "../../types";
import type { PalinPermData } from "./algorithm";
import { palinPermSteps } from "./algorithm";
import { CODE } from "./code";
import { PalinPermRenderer } from "./PalinPermRenderer";

export const palindromePermutationProblem: LeetCodeProblem<string, PalinPermData, Record<string, never>> = {
  id: "palindrome-permutation",
  number: 266,
  title: "Palindrome Permutation",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/palindrome-permutation/",
  summary: "A palindrome is possible iff at most one character has an odd count.",
  prompt:
    "Given a string, determine whether any permutation of it can form a palindrome.",
  topics: ["Hash Table", "String", "Bit Manipulation"],
  tags: ["Hash Table", "String", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "aabbhijkkjih",
  defaultOptions: {},
  buildSteps: (input) => palinPermSteps(input),
  Renderer: PalinPermRenderer,
};
