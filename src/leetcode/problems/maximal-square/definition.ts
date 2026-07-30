import type { LeetCodeProblem } from "../../types";
import type { MaxSquareData } from "./algorithm";
import { maxSquareSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxSquareRenderer } from "./MaxSquareRenderer";

export const maximalSquareProblem: LeetCodeProblem<number[][], MaxSquareData, Record<string, never>> = {
  id: "maximal-square",
  number: 221,
  title: "Maximal Square",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximal-square/",
  summary: "dp[i][j] extends the smallest of its top/left/top-left squares by one; the largest side squared is the area.",
  prompt: "Given an m×n binary matrix, find the largest square containing only 1s and return its area.",
  topics: ["Array", "Dynamic Programming", "Matrix"],
  tags: ["Dynamic Programming", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => maxSquareSteps(input),
  Renderer: MaxSquareRenderer,
};
