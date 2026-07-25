import type { LeetCodeProblem } from "../../types";
import type { UglyIIData } from "./algorithm";
import { uglyIISteps } from "./algorithm";
import { CODE } from "./code";
import { UglyIIRenderer } from "./UglyIIRenderer";

export const uglyNumberIIProblem: LeetCodeProblem<number, UglyIIData, Record<string, never>> = {
  id: "ugly-number-ii",
  number: 264,
  title: "Ugly Number II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/ugly-number-ii/",
  summary: "Three pointers generate ugly numbers in order as the min of dp[p]×{2,3,5}.",
  prompt:
    "An ugly number has only 2, 3, and 5 as prime factors. Return the nth ugly number (the sequence " +
    "starts 1, 2, 3, 4, 5, 6, 8, …).",
  topics: ["Hash Table", "Math", "Dynamic Programming", "Heap"],
  tags: ["Math", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 10,
  defaultOptions: {},
  buildSteps: (input) => uglyIISteps(input),
  Renderer: UglyIIRenderer,
};
