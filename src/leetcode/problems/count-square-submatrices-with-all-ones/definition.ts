import type { LeetCodeProblem } from "../../types";
import type { SquaresData } from "./algorithm";
import { squaresSteps } from "./algorithm";
import { CODE } from "./code";
import { SquaresRenderer } from "./SquaresRenderer";

export const countSquareSubmatricesProblem: LeetCodeProblem<number[][], SquaresData, Record<string, never>> = {
  id: "count-square-submatrices-with-all-ones",
  number: 1277,
  title: "Count Square Submatrices with All Ones",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/",
  summary: "dp[i][j] extends the smallest of its top/left/top-left squares by one; summing dp counts all squares.",
  prompt: "Given an m×n binary matrix, count how many square submatrices contain only ones.",
  topics: ["Array", "Dynamic Programming", "Matrix"],
  tags: ["Dynamic Programming", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => squaresSteps(input),
  Renderer: SquaresRenderer,
};
