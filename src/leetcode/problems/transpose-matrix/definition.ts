import type { LeetCodeProblem } from "../../types";
import type { TransposeData } from "./algorithm";
import { transposeSteps } from "./algorithm";
import { CODE } from "./code";
import { TransposeRenderer } from "./TransposeRenderer";

export const transposeMatrixProblem: LeetCodeProblem<number[][], TransposeData, Record<string, never>> = {
  id: "transpose-matrix",
  number: 867,
  title: "Transpose Matrix",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/transpose-matrix/",
  summary: "Reflect across the diagonal: value at (i, j) moves to (j, i).",
  prompt: "Given a 2D matrix, return its transpose — the matrix flipped over its main diagonal.",
  topics: ["Array", "Matrix", "Simulation"],
  tags: ["Array", "Matrix", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 2, 3],
    [4, 5, 6],
  ],
  defaultOptions: {},
  buildSteps: (input) => transposeSteps(input),
  Renderer: TransposeRenderer,
};
