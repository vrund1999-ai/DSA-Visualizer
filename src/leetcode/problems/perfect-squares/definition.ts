import type { LeetCodeProblem } from "../../types";
import type { PerfectSquaresData } from "./algorithm";
import { perfectSquaresSteps } from "./algorithm";
import { CODE } from "./code";
import { PerfectSquaresRenderer } from "./PerfectSquaresRenderer";

export const perfectSquaresProblem: LeetCodeProblem<number, PerfectSquaresData, Record<string, never>> = {
  id: "perfect-squares",
  number: 279,
  title: "Perfect Squares",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/perfect-squares/",
  summary: "1-D DP: dp[i] = 1 + min over squares j² of dp[i − j²].",
  prompt:
    "Given an integer n, return the least number of perfect square numbers (1, 4, 9, 16, " +
    "…) that sum to n.",
  topics: ["Math", "Dynamic Programming", "Breadth-First Search"],
  tags: ["Math", "Dynamic Programming", "Breadth-First Search"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n√n)", timeWorst: "O(n√n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 12,
  defaultOptions: {},
  buildSteps: (input) => perfectSquaresSteps(input),
  Renderer: PerfectSquaresRenderer,
};
