import type { LeetCodeProblem } from "../../types";
import type { FallingData } from "./algorithm";
import { fallingSteps } from "./algorithm";
import { CODE } from "./code";
import { FallingRenderer } from "./FallingRenderer";

export const minimumFallingPathSumProblem: LeetCodeProblem<number[][], FallingData, Record<string, never>> = {
  id: "minimum-falling-path-sum",
  number: 931,
  title: "Minimum Falling Path Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-falling-path-sum/",
  summary: "Row-by-row DP: each cell adds the minimum of the three cells directly or diagonally above.",
  prompt:
    "Given an n×n matrix, a falling path starts at any cell in the first row and moves down to a cell " +
    "directly below or diagonally adjacent. Return the minimum sum of any falling path.",
  topics: ["Array", "Dynamic Programming", "Matrix"],
  tags: ["Dynamic Programming", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ],
  defaultOptions: {},
  buildSteps: (input) => fallingSteps(input),
  Renderer: FallingRenderer,
};
