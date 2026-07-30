import type { LeetCodeProblem } from "../../types";
import type { MatrixSumData } from "./algorithm";
import { matrixSumSteps } from "./algorithm";
import { CODE } from "./code";
import { MatrixSumRenderer } from "./MatrixSumRenderer";

export const maximumMatrixSumProblem: LeetCodeProblem<number[][], MatrixSumData, Record<string, never>> = {
  id: "maximum-matrix-sum",
  number: 1975,
  title: "Maximum Matrix Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-matrix-sum/",
  summary: "Adjacent sign-flips cancel negatives in pairs; an odd count leaves one negative on the smallest magnitude.",
  prompt:
    "You may repeatedly multiply two adjacent elements by -1. Maximize the matrix sum and return that " +
    "maximum.",
  topics: ["Array", "Greedy", "Matrix"],
  tags: ["Greedy", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
  ],
  defaultOptions: {},
  buildSteps: (input) => matrixSumSteps(input),
  Renderer: MatrixSumRenderer,
};
