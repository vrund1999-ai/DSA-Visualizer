import type { LeetCodeProblem } from "../../types";
import type { KthMatrixData } from "./algorithm";
import { kthMatrixSteps } from "./algorithm";
import { CODE } from "./code";
import { KthMatrixRenderer } from "./KthMatrixRenderer";

interface KthMatrixInput {
  matrix: number[][];
  k: number;
}

export const kthSmallestInMatrixProblem: LeetCodeProblem<KthMatrixInput, KthMatrixData, Record<string, never>> = {
  id: "kth-smallest-element-in-a-sorted-matrix",
  number: 378,
  title: "Kth Smallest Element in a Sorted Matrix",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
  summary: "Binary-search the value; count entries ≤ mid with an O(n) staircase walk from the bottom-left.",
  prompt:
    "Given an n×n matrix where each row and column is sorted ascending, return the kth smallest element " +
    "(in overall sorted order).",
  topics: ["Array", "Binary Search", "Matrix", "Heap"],
  tags: ["Binary Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log(max−min))", timeWorst: "O(n log(max−min))", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ matrix: [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k: 8 }),
  defaultOptions: {},
  buildSteps: (input) => kthMatrixSteps(input.matrix, input.k),
  Renderer: KthMatrixRenderer,
};
