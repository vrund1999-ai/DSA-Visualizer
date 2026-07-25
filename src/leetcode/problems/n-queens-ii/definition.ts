import type { LeetCodeProblem } from "../../types";
import type { NQueensData } from "./algorithm";
import { nqueensSteps } from "./algorithm";
import { CODE } from "./code";
import { NQueensRenderer } from "./NQueensRenderer";

export const nQueensIIProblem: LeetCodeProblem<number, NQueensData, Record<string, never>> = {
  id: "n-queens-ii",
  number: 52,
  title: "N-Queens II",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/n-queens-ii/",
  summary: "Backtrack one queen per row, pruning by column and both diagonals; count full boards.",
  prompt:
    "Return the number of distinct ways to place n queens on an n×n board so that no two attack " +
    "each other (no shared row, column, or diagonal).",
  topics: ["Backtracking"],
  tags: ["Backtracking"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n!)", timeWorst: "O(n!)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 6,
  defaultOptions: {},
  buildSteps: (input) => nqueensSteps(input),
  Renderer: NQueensRenderer,
};
