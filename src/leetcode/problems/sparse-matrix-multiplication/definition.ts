import type { LeetCodeProblem } from "../../types";
import type { SparseMulData } from "./algorithm";
import { sparseMulSteps } from "./algorithm";
import { CODE } from "./code";
import { SparseMulRenderer } from "./SparseMulRenderer";

interface SparseMulInput {
  A: number[][];
  B: number[][];
}

export const sparseMatrixMultiplicationProblem: LeetCodeProblem<SparseMulInput, SparseMulData, Record<string, never>> = {
  id: "sparse-matrix-multiplication",
  number: 311,
  title: "Sparse Matrix Multiplication",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sparse-matrix-multiplication/",
  summary: "Skip zero A entries so each nonzero scatters into a full row of the product.",
  prompt:
    "Given two sparse matrices A (m × k) and B (k × n), return their product A × B, " +
    "avoiding work on zero entries.",
  topics: ["Array", "Hash Table", "Matrix"],
  tags: ["Array", "Hash Table", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·k·n)", timeWorst: "O(m·k·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    A: [
      [1, 0, 0],
      [-1, 0, 3],
    ],
    B: [
      [7, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => sparseMulSteps(input.A, input.B),
  Renderer: SparseMulRenderer,
};
