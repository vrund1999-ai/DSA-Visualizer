import type { LeetCodeProblem } from "../../types";
import type { LongestPathData } from "./algorithm";
import { longestPathSteps } from "./algorithm";
import { CODE } from "./code";
import { LongestPathRenderer } from "./LongestPathRenderer";

export const longestIncreasingPathProblem: LeetCodeProblem<number[][], LongestPathData, Record<string, never>> = {
  id: "longest-increasing-path-in-a-matrix",
  number: 329,
  title: "Longest Increasing Path in a Matrix",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
  summary: "Memoized DFS: each cell's answer is 1 plus the longest path among strictly-greater neighbors.",
  prompt:
    "Given an m×n integer matrix, return the length of the longest strictly increasing path, moving only " +
    "up, down, left, or right.",
  topics: ["Array", "DFS", "BFS", "Dynamic Programming", "Matrix"],
  tags: ["DFS", "Dynamic Programming", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => longestPathSteps(input),
  Renderer: LongestPathRenderer,
};
