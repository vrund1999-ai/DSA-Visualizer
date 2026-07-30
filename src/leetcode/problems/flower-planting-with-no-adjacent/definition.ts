import type { LeetCodeProblem } from "../../types";
import type { GardenData } from "./algorithm";
import { gardenSteps } from "./algorithm";
import { CODE } from "./code";
import { GardenRenderer } from "./GardenRenderer";

interface GardenInput {
  n: number;
  paths: number[][];
}

export const flowerPlantingProblem: LeetCodeProblem<GardenInput, GardenData, Record<string, never>> = {
  id: "flower-planting-with-no-adjacent",
  number: 1042,
  title: "Flower Planting With No Adjacent",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/flower-planting-with-no-adjacent/",
  summary: "Greedy 4-coloring: each garden (degree ≤ 3) takes the smallest flower type no neighbor already uses.",
  prompt:
    "n gardens are connected by bidirectional paths; each garden has at most three neighbors. Assign one " +
    "of four flower types to every garden so no two connected gardens share a type.",
  topics: ["Graph", "Greedy"],
  tags: ["Graph", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + paths)", timeWorst: "O(n + paths)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 4, paths: [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3]] }),
  defaultOptions: {},
  buildSteps: (input) => gardenSteps(input.n, input.paths),
  Renderer: GardenRenderer,
};
