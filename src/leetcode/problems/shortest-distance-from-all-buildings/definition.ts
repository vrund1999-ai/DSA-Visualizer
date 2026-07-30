import type { LeetCodeProblem } from "../../types";
import type { BuildingsData } from "./algorithm";
import { buildingsSteps } from "./algorithm";
import { CODE } from "./code";
import { BuildingsRenderer } from "./BuildingsRenderer";

export const shortestDistBuildingsProblem: LeetCodeProblem<number[][], BuildingsData, Record<string, never>> = {
  id: "shortest-distance-from-all-buildings",
  number: 317,
  title: "Shortest Distance from All Buildings",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/shortest-distance-from-all-buildings/",
  summary: "BFS from every building, summing distances into each empty cell; the best reachable-by-all cell wins.",
  prompt:
    "On a grid of empty land (0), buildings (1), and obstacles (2), find an empty cell minimizing the total " +
    "travel distance to reach all buildings. Return that distance, or -1 if impossible.",
  topics: ["Array", "BFS", "Matrix"],
  tags: ["BFS", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(buildings · RC)", timeWorst: "O(buildings · RC)", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 0, 2, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => buildingsSteps(input),
  Renderer: BuildingsRenderer,
};
