import type { LeetCodeProblem } from "../../types";
import type { NQueensData } from "./algorithm";
import { nQueensSteps } from "./algorithm";
import { CODE } from "./code";
import { NQueensRenderer } from "./NQueensRenderer";

export const nQueensProblem: LeetCodeProblem<
  number,
  NQueensData,
  Record<string, never>
> = {
  id: "n-queens",
  number: 51,
  title: "N-Queens",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/n-queens/",
  summary: "Place n non-attacking queens via backtracking.",
  prompt:
    "Place n queens on an n×n board so no two attack each other (no shared row, " +
    "column, or diagonal). Count/return the distinct arrangements.",
  topics: ["Array", "Backtracking"],
  tags: ["Array", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 54.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n!)", timeWorst: "O(n!)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 4,
  defaultOptions: {},
  buildSteps: (input) => nQueensSteps(input),
  Renderer: NQueensRenderer,
};
