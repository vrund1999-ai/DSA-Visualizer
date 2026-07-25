import type { LeetCodeProblem } from "../../types";
import type { LCSData } from "./algorithm";
import { lcsSteps } from "./algorithm";
import { CODE } from "./code";
import { LCSRenderer } from "./LCSRenderer";

interface LCSInput {
  a: string;
  b: string;
}

export const longestCommonSubsequenceProblem: LeetCodeProblem<LCSInput, LCSData, Record<string, never>> = {
  id: "longest-common-subsequence",
  number: 1143,
  title: "Longest Common Subsequence",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-common-subsequence/",
  summary: "2-D DP; matches extend the diagonal, mismatches take the better neighbour.",
  prompt:
    "Given two strings, return the length of their longest common subsequence — a " +
    "sequence appearing in both in the same relative order but not necessarily contiguous.",
  topics: ["String", "Dynamic Programming"],
  tags: ["String", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ a: "abcde", b: "ace" }),
  defaultOptions: {},
  buildSteps: (input) => lcsSteps(input.a, input.b),
  Renderer: LCSRenderer,
};
