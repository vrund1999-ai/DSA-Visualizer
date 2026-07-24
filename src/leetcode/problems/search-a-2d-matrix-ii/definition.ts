import type { LeetCodeProblem } from "../../types";
import type { SearchMatrixData } from "./algorithm";
import { searchMatrixSteps } from "./algorithm";
import { CODE } from "./code";
import { SearchMatrixRenderer } from "./SearchMatrixRenderer";

interface SearchMatrixInput {
  matrix: number[][];
  target: number;
}

export const search2DMatrixIIProblem: LeetCodeProblem<SearchMatrixInput, SearchMatrixData, Record<string, never>> = {
  id: "search-a-2d-matrix-ii",
  number: 240,
  title: "Search a 2D Matrix II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
  summary: "Staircase search from the top-right eliminates a row or column each step.",
  prompt:
    "Search for target in an m × n matrix where each row is sorted left-to-right and each " +
    "column is sorted top-to-bottom. Return whether it is present in O(m + n).",
  topics: ["Array", "Binary Search", "Divide and Conquer", "Matrix"],
  tags: ["Array", "Binary Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m + n)", timeWorst: "O(m + n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    matrix: [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    target: 5,
  }),
  defaultOptions: {},
  buildSteps: (input) => searchMatrixSteps(input.matrix, input.target),
  Renderer: SearchMatrixRenderer,
};
