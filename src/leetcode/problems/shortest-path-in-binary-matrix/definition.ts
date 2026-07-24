import type { LeetCodeProblem } from "../../types";
import type { ShortestPathData } from "./algorithm";
import { shortestPathSteps } from "./algorithm";
import { CODE } from "./code";
import { ShortestPathRenderer } from "./ShortestPathRenderer";

export const shortestPathBinaryMatrixProblem: LeetCodeProblem<number[][], ShortestPathData, Record<string, never>> = {
  id: "shortest-path-in-binary-matrix",
  number: 1091,
  title: "Shortest Path in Binary Matrix",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
  summary: "8-directional BFS over clear cells from top-left to bottom-right.",
  prompt:
    "Given an n × n binary matrix (0 = clear, 1 = blocked), return the length of the " +
    "shortest clear path from the top-left to the bottom-right cell, moving in 8 " +
    "directions, or -1 if none exists.",
  topics: ["Array", "Breadth-First Search", "Matrix"],
  tags: ["Array", "Breadth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => shortestPathSteps(input),
  Renderer: ShortestPathRenderer,
};
