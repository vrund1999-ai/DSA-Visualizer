import type { LeetCodeProblem } from "../../types";
import type { PalinNumData } from "./algorithm";
import { palinNumSteps } from "./algorithm";
import { CODE } from "./code";
import { PalinNumRenderer } from "./PalinNumRenderer";

export const palindromeNumberProblem: LeetCodeProblem<
  number,
  PalinNumData,
  Record<string, never>
> = {
  id: "palindrome-number",
  number: 9,
  title: "Palindrome Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/palindrome-number/",
  summary: "Decide if an integer reads the same backwards.",
  prompt:
    "Given an integer `x`, return true if `x` reads the same forwards and " +
    "backwards. Negative numbers are never palindromes.",
  topics: ["Math"],
  tags: ["Math"],
  companies: ["Bloomberg"],
  frequency: 72.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(d)", timeWorst: "O(d)", space: "O(d)" },
  inputSchema: [],
  makeDefaultInput: () => 12321,
  defaultOptions: {},
  buildSteps: (input) => palinNumSteps(input),
  Renderer: PalinNumRenderer,
};
