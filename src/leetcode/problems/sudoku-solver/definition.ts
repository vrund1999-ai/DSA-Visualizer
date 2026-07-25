import type { LeetCodeProblem } from "../../types";
import type { SudokuData } from "./algorithm";
import { sudokuSteps } from "./algorithm";
import { CODE } from "./code";
import { SudokuRenderer } from "./SudokuRenderer";

export const sudokuSolverProblem: LeetCodeProblem<number[][], SudokuData, Record<string, never>> = {
  id: "sudoku-solver",
  number: 37,
  title: "Sudoku Solver",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/sudoku-solver/",
  summary: "Backtrack: fill each empty cell with a digit valid for its row, column, and box.",
  prompt:
    "Fill the empty cells (shown as 0) of a 9×9 Sudoku so that every row, column, and 3×3 box " +
    "contains the digits 1-9 exactly once. A solution is guaranteed.",
  topics: ["Array", "Backtracking", "Matrix"],
  tags: ["Array", "Backtracking", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 45.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(9^m)", timeWorst: "O(9^m)", space: "O(m)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [5, 3, 0, 6, 7, 8, 9, 1, 0],
    [6, 0, 2, 1, 9, 5, 3, 4, 8],
    [0, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 0, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 0],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 0, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 0, 7, 9],
  ],
  defaultOptions: {},
  buildSteps: (input) => sudokuSteps(input),
  Renderer: SudokuRenderer,
};
