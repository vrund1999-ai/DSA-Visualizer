import type { LeetCodeProblem } from "../../types";
import type { TrapData } from "./algorithm";
import { trapSteps } from "./algorithm";
import { CODE } from "./code";
import { TrapRainRenderer } from "./TrapRainRenderer";

export const trappingRainWaterIIProblem: LeetCodeProblem<number[][], TrapData, Record<string, never>> = {
  id: "trapping-rain-water-ii",
  number: 407,
  title: "Trapping Rain Water II",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/trapping-rain-water-ii/",
  summary: "A min-heap expands inward from the lowest wall, pooling water up to each boundary's height.",
  prompt:
    "Given an m×n height map, compute the volume of water it can trap after raining. Water pools " +
    "inward from the lowest surrounding wall.",
  topics: ["Heap", "BFS", "Matrix"],
  tags: ["Heap", "BFS", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(mn log(mn))", timeWorst: "O(mn log(mn))", space: "O(mn)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 4, 3, 1, 3, 2],
    [3, 2, 1, 3, 2, 4],
    [2, 3, 3, 2, 3, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => trapSteps(input),
  Renderer: TrapRainRenderer,
};
