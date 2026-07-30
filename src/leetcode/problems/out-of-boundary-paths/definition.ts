import type { LeetCodeProblem } from "../../types";
import type { OutPathsData } from "./algorithm";
import { outPathsSteps } from "./algorithm";
import { CODE } from "./code";
import { OutPathsRenderer } from "./OutPathsRenderer";

interface OutPathsInput {
  m: number;
  n: number;
  maxMove: number;
  startRow: number;
  startColumn: number;
}

export const outOfBoundaryPathsProblem: LeetCodeProblem<OutPathsInput, OutPathsData, Record<string, never>> = {
  id: "out-of-boundary-paths",
  number: 576,
  title: "Out of Boundary Paths",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/out-of-boundary-paths/",
  summary: "Layered DP over move count: each move spreads ball-counts to neighbors, tallying those that fall off the grid.",
  prompt:
    "A ball starts at a cell of an m×n grid and can move to an adjacent cell up to maxMove times. Count the " +
    "number of move sequences that take the ball out of the grid, modulo 1e9+7.",
  topics: ["Dynamic Programming"],
  tags: ["Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(maxMove · m · n)", timeWorst: "O(maxMove · m · n)", space: "O(m · n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ m: 2, n: 3, maxMove: 3, startRow: 0, startColumn: 1 }),
  defaultOptions: {},
  buildSteps: (input) => outPathsSteps(input.m, input.n, input.maxMove, input.startRow, input.startColumn),
  Renderer: OutPathsRenderer,
};
