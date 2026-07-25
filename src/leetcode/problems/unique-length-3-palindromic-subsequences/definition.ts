import type { LeetCodeProblem } from "../../types";
import type { PalinSubseqData } from "./algorithm";
import { palinSubseqSteps } from "./algorithm";
import { CODE } from "./code";
import { PalinSubseqRenderer } from "./PalinSubseqRenderer";

export const uniqueLength3PalindromesProblem: LeetCodeProblem<string, PalinSubseqData, Record<string, never>> = {
  id: "unique-length-3-palindromic-subsequences",
  number: 1930,
  title: "Unique Length-3 Palindromic Subsequences",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/unique-length-3-palindromic-subsequences/",
  summary: "For each outer letter, count distinct characters between its first and last occurrence.",
  prompt:
    "Return the number of unique palindromic subsequences of length three in s (subsequences of the " +
    "form x·y·x, counted once per distinct string).",
  topics: ["Hash Table", "String", "Bit Manipulation", "Prefix Sum"],
  tags: ["Hash Table", "String", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(26·n)", timeWorst: "O(26·n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "aabca",
  defaultOptions: {},
  buildSteps: (input) => palinSubseqSteps(input),
  Renderer: PalinSubseqRenderer,
};
