import type { LeetCodeProblem } from "../../types";
import type { FloodFillData } from "./algorithm";
import { floodFillSteps } from "./algorithm";
import { CODE } from "./code";
import { FloodFillRenderer } from "./FloodFillRenderer";

interface FloodFillInput {
  image: number[][];
  sr: number;
  sc: number;
  color: number;
}

export const floodFillProblem: LeetCodeProblem<FloodFillInput, FloodFillData, Record<string, never>> = {
  id: "flood-fill",
  number: 733,
  title: "Flood Fill",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/flood-fill/",
  summary: "DFS recolors every 4-connected cell sharing the start color.",
  prompt:
    "Given an image grid, a starting pixel (sr, sc) and a new color, recolor the starting " +
    "pixel and all 4-directionally connected pixels of the same original color.",
  topics: ["Array", "Depth-First Search", "Breadth-First Search", "Matrix"],
  tags: ["Array", "Depth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    image: [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    sr: 1,
    sc: 1,
    color: 2,
  }),
  defaultOptions: {},
  buildSteps: (input) => floodFillSteps(input.image, input.sr, input.sc, input.color),
  Renderer: FloodFillRenderer,
};
