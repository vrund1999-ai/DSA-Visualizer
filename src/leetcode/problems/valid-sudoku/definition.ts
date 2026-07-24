import type { LeetCodeProblem } from "../../types";
import type { SudokuData } from "./algorithm";
import { sudokuSteps } from "./algorithm";
import { CODE } from "./code";
import { SudokuRenderer } from "./SudokuRenderer";

const ROW = (s: string) => s.split("");

export const validSudokuProblem: LeetCodeProblem<
  string[][],
  SudokuData,
  Record<string, never>
> = {
  id: "valid-sudoku",
  number: 36,
  title: "Valid Sudoku",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/valid-sudoku/",
  summary: "Check row, column and box rules with a hash set.",
  prompt:
    "Determine if a 9×9 Sudoku board (partially filled, '.' for empty) is valid: " +
    "each row, each column, and each 3×3 box must contain the digits 1–9 without " +
    "repetition. Only the filled cells are validated.",
  topics: ["Array", "Hash Table", "Matrix"],
  tags: ["Array", "Hash Table", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 53.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ROW("53..7...."),
    ROW("6..195..."),
    ROW(".98....6."),
    ROW("8...6...3"),
    ROW("4..8.3..1"),
    ROW("7...2...6"),
    ROW(".6....28."),
    ROW("...419..5"),
    ROW("....8..79"),
  ],
  defaultOptions: {},
  buildSteps: (input) => sudokuSteps(input),
  Renderer: SudokuRenderer,
};
