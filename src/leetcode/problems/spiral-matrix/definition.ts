import type { LeetCodeProblem } from "../../types";
import type { SpiralData } from "./algorithm";
import { spiralSteps } from "./algorithm";
import { CODE } from "./code";
import { SpiralRenderer } from "./SpiralRenderer";

export const spiralMatrixProblem: LeetCodeProblem<
  number[][],
  SpiralData,
  Record<string, never>
> = {
  id: "spiral-matrix",
  number: 54,
  title: "Spiral Matrix",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/spiral-matrix/",
  summary: "Read a matrix in spiral order by peeling layers.",
  prompt:
    "Given an m×n matrix, return all its elements in spiral order (clockwise, " +
    "starting from the top-left).",
  topics: ["Array", "Matrix", "Simulation"],
  tags: ["Array", "Matrix", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 59.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ],
  defaultOptions: {},
  buildSteps: (input) => spiralSteps(input),
  Renderer: SpiralRenderer,
};
