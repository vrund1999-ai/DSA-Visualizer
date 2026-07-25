import type { LeetCodeProblem } from "../../types";
import type { CountNegData } from "./algorithm";
import { countNegSteps } from "./algorithm";
import { CODE } from "./code";
import { CountNegRenderer } from "./CountNegRenderer";

export const countNegativesProblem: LeetCodeProblem<number[][], CountNegData, Record<string, never>> = {
  id: "count-negative-numbers-in-a-sorted-matrix",
  number: 1351,
  title: "Count Negative Numbers in a Sorted Matrix",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/",
  summary: "Staircase walk from the bottom-left: a negative cell reveals a whole negative row segment.",
  prompt:
    "Given an m×n matrix sorted in non-increasing order both row- and column-wise, return the number " +
    "of negative numbers in it.",
  topics: ["Array", "Binary Search", "Matrix"],
  tags: ["Array", "Binary Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m + n)", timeWorst: "O(m + n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ],
  defaultOptions: {},
  buildSteps: (input) => countNegSteps(input),
  Renderer: CountNegRenderer,
};
