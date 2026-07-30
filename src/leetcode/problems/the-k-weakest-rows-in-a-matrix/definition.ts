import type { LeetCodeProblem } from "../../types";
import type { WeakRowsData } from "./algorithm";
import { weakRowsSteps } from "./algorithm";
import { CODE } from "./code";
import { WeakRowsRenderer } from "./WeakRowsRenderer";

interface WeakRowsInput {
  mat: number[][];
  k: number;
}

export const kWeakestRowsProblem: LeetCodeProblem<WeakRowsInput, WeakRowsData, Record<string, never>> = {
  id: "the-k-weakest-rows-in-a-matrix",
  number: 1337,
  title: "The K Weakest Rows in a Matrix",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",
  summary: "Count soldiers per row, then sort by strength (then index) and take the k weakest.",
  prompt:
    "A binary matrix's rows list soldiers (1s, always before civilians 0s). Return the indices of the k " +
    "weakest rows, ordered by soldier count then row index.",
  topics: ["Array", "Binary Search", "Sorting", "Heap", "Matrix"],
  tags: ["Sorting", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(mn + m log m)", timeWorst: "O(mn + m log m)", space: "O(m)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    mat: [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    k: 3,
  }),
  defaultOptions: {},
  buildSteps: (input) => weakRowsSteps(input.mat, input.k),
  Renderer: WeakRowsRenderer,
};
