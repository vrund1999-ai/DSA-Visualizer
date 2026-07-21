import type { LeetCodeProblem } from "../../types";
import type { SetZeroesData } from "./algorithm";
import { setZeroesSteps } from "./algorithm";
import { CODE } from "./code";
import { SetZeroesRenderer } from "./SetZeroesRenderer";

export const setMatrixZeroesProblem: LeetCodeProblem<
  number[][],
  SetZeroesData,
  Record<string, never>
> = {
  id: "set-matrix-zeroes",
  number: 73,
  title: "Set Matrix Zeroes",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/set-matrix-zeroes/",
  summary: "Zero out the row and column of every zero cell.",
  prompt:
    "Given an m×n matrix, if an element is 0, set its entire row and column to 0. " +
    "Do it in a way that doesn't let newly-created zeroes cascade.",
  topics: ["Array", "Hash Table", "Matrix"],
  tags: ["Array", "Hash Table", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 56.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m + n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => setZeroesSteps(input),
  Renderer: SetZeroesRenderer,
};
