import type { LeetCodeProblem } from "../../types";
import type { MinPathData } from "./algorithm";
import { minPathSteps } from "./algorithm";
import { CODE } from "./code";
import { MinPathRenderer } from "./MinPathRenderer";

export const minimumPathSumProblem: LeetCodeProblem<
  number[][],
  MinPathData,
  Record<string, never>
> = {
  id: "minimum-path-sum",
  number: 64,
  title: "Minimum Path Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-path-sum/",
  summary: "Cheapest top-left to bottom-right path (grid DP).",
  prompt:
    "Given an m×n grid of non-negative numbers, find a path from the top-left to " +
    "the bottom-right that minimizes the sum of the numbers along it. You may " +
    "only move right or down.",
  topics: ["Array", "Dynamic Programming", "Matrix"],
  tags: ["Array", "Dynamic Programming", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => minPathSteps(input),
  Renderer: MinPathRenderer,
};
