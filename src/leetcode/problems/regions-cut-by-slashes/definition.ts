import type { LeetCodeProblem } from "../../types";
import type { SlashesData } from "./algorithm";
import { slashesSteps } from "./algorithm";
import { CODE } from "./code";
import { SlashesRenderer } from "./SlashesRenderer";

export const regionsCutBySlashesProblem: LeetCodeProblem<string[], SlashesData, Record<string, never>> = {
  id: "regions-cut-by-slashes",
  number: 959,
  title: "Regions Cut By Slashes",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/regions-cut-by-slashes/",
  summary: "Upscale every cell to 3×3, draw each slash as a diagonal wall, then count connected empty regions.",
  prompt:
    "An n×n grid of ' ', '/', and '\\\\' characters is divided by the slashes into regions. Return the " +
    "number of contiguous regions.",
  topics: ["Array", "DFS", "BFS", "Union Find", "Matrix"],
  tags: ["Union Find", "DFS", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => [" /", "/ "],
  defaultOptions: {},
  buildSteps: (input) => slashesSteps(input),
  Renderer: SlashesRenderer,
};
