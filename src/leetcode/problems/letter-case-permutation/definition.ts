import type { LeetCodeProblem } from "../../types";
import type { LetterCaseData } from "./algorithm";
import { letterCaseSteps } from "./algorithm";
import { CODE } from "./code";
import { LetterCaseRenderer } from "./LetterCaseRenderer";

export const letterCasePermutationProblem: LeetCodeProblem<string, LetterCaseData, Record<string, never>> = {
  id: "letter-case-permutation",
  number: 784,
  title: "Letter Case Permutation",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/letter-case-permutation/",
  summary: "DFS over per-letter case choices (lower/upper); digits pass through, producing all combinations.",
  prompt:
    "Given a string, transform each letter to lowercase or uppercase (digits stay) to create all possible " +
    "strings, and return them in any order.",
  topics: ["String", "Backtracking", "Bit Manipulation"],
  tags: ["Backtracking", "String"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(2^L · n)", timeWorst: "O(2^L · n)", space: "O(2^L · n)" },
  inputSchema: [],
  makeDefaultInput: () => "a1b2",
  defaultOptions: {},
  buildSteps: (input) => letterCaseSteps(input),
  Renderer: LetterCaseRenderer,
};
