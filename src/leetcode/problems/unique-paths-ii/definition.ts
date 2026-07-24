import type { LeetCodeProblem } from "../../types";
import type { UniquePathsData } from "./algorithm";
import { uniquePathsSteps } from "./algorithm";
import { CODE } from "./code";
import { UniquePathsRenderer } from "./UniquePathsRenderer";

export const uniquePathsIIProblem: LeetCodeProblem<number[][], UniquePathsData, Record<string, never>> = {
  id: "unique-paths-ii",
  number: 63,
  title: "Unique Paths II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/unique-paths-ii/",
  summary: "Grid DP counting obstacle-free paths from top-left to bottom-right.",
  prompt:
    "A robot starts at the top-left of an m x n grid and can only move down or right. " +
    "Some cells contain obstacles (marked 1). Return the number of unique paths to the " +
    "bottom-right corner.",
  topics: ["Array", "Dynamic Programming", "Matrix"],
  tags: ["Array", "Dynamic Programming", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 49.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => uniquePathsSteps(input),
  Renderer: UniquePathsRenderer,
};
