import type { LeetCodeProblem } from "../../types";
import type { DiagonalData } from "./algorithm";
import { diagonalSteps } from "./algorithm";
import { CODE } from "./code";
import { DiagonalRenderer } from "./DiagonalRenderer";

export const diagonalTraverseProblem: LeetCodeProblem<number[][], DiagonalData, Record<string, never>> = {
  id: "diagonal-traverse",
  number: 498,
  title: "Diagonal Traverse",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/diagonal-traverse/",
  summary: "Walk anti-diagonals, flipping between up-right and down-left at edges.",
  prompt:
    "Given an m × n matrix, return all its elements in diagonal order: the first " +
    "anti-diagonal goes up-right, the next down-left, and so on.",
  topics: ["Array", "Matrix", "Simulation"],
  tags: ["Array", "Matrix", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  defaultOptions: {},
  buildSteps: (input) => diagonalSteps(input),
  Renderer: DiagonalRenderer,
};
