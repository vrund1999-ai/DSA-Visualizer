import type { LeetCodeProblem } from "../../types";
import type { Search2DData, Search2DInput } from "./algorithm";
import { search2DSteps } from "./algorithm";
import { CODE } from "./code";
import { Search2DRenderer } from "./Search2DRenderer";

export const search2DMatrixProblem: LeetCodeProblem<
  Search2DInput,
  Search2DData,
  Record<string, never>
> = {
  id: "search-a-2d-matrix",
  number: 74,
  title: "Search a 2D Matrix",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/search-a-2d-matrix/",
  summary: "Binary search a row-wise sorted matrix as one array.",
  prompt:
    "Given an m×n matrix where each row is sorted and the first value of each row " +
    "exceeds the last of the previous row, return true if `target` is present. " +
    "Aim for O(log(m·n)).",
  topics: ["Array", "Binary Search", "Matrix"],
  tags: ["Array", "Binary Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 54.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log(m·n))", timeWorst: "O(log(m·n))", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    matrix: [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    target: 16,
  }),
  defaultOptions: {},
  buildSteps: (input) => search2DSteps(input),
  Renderer: Search2DRenderer,
};
