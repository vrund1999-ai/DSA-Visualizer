import type { LeetCodeProblem } from "../../types";
import type { RowMaxData } from "./algorithm";
import { rowMaxSteps } from "./algorithm";
import { CODE } from "./code";
import { RowMaxRenderer } from "./RowMaxRenderer";

interface RowMaxInput {
  grid: number[][];
}

export const rowWithMaxOnesProblem: LeetCodeProblem<RowMaxInput, RowMaxData, Record<string, never>> = {
  id: "row-with-maximum-ones",
  number: 2643,
  title: "Row With Maximum Ones",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/row-with-maximum-ones/",
  summary: "Count ones per row and keep the maximum, updating only on a strict increase so ties keep the earliest row.",
  prompt:
    "Given a binary matrix, return [rowIndex, count] for the row containing the most ones. If multiple rows " +
    "tie, return the one with the smallest index.",
  topics: ["Array", "Matrix"],
  tags: ["Matrix", "Array"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ grid: [[0, 1, 1, 0], [0, 0, 1, 0], [1, 1, 1, 1], [0, 1, 0, 0]] }),
  defaultOptions: {},
  buildSteps: (input) => rowMaxSteps(input.grid),
  Renderer: RowMaxRenderer,
};
