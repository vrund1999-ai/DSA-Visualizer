import type { LeetCodeProblem } from "../../types";
import type { ShortestPathData } from "./algorithm";
import { shortestPathSteps } from "./algorithm";
import { CODE } from "./code";
import { ShortestPathRenderer } from "./ShortestPathRenderer";

interface ShortestPathInput {
  grid: number[][];
  k: number;
}

export const shortestPathObstaclesProblem: LeetCodeProblem<ShortestPathInput, ShortestPathData, Record<string, never>> = {
  id: "shortest-path-in-a-grid-with-obstacles-elimination",
  number: 1293,
  title: "Shortest Path in a Grid with Obstacles Elimination",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/",
  summary: "BFS over (row, col, eliminations left); stepping onto an obstacle spends one, and each state is visited once.",
  prompt:
    "In a 0/1 grid you may eliminate up to k obstacles (1s). Return the length of the shortest path from the " +
    "top-left to the bottom-right corner, or -1 if impossible.",
  topics: ["Array", "Breadth-First Search", "Matrix"],
  tags: ["BFS", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(R·C·k)", timeWorst: "O(R·C·k)", space: "O(R·C·k)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    grid: [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    k: 1,
  }),
  defaultOptions: {},
  buildSteps: (input) => shortestPathSteps(input.grid, input.k),
  Renderer: ShortestPathRenderer,
};
