import type { LeetCodeProblem } from "../../types";
import type { PerimeterData } from "./algorithm";
import { perimeterSteps } from "./algorithm";
import { CODE } from "./code";
import { PerimeterRenderer } from "./PerimeterRenderer";

export const islandPerimeterProblem: LeetCodeProblem<number[][], PerimeterData, Record<string, never>> = {
  id: "island-perimeter",
  number: 463,
  title: "Island Perimeter",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/island-perimeter/",
  summary: "Each land cell adds 4; every shared up/left edge subtracts 2.",
  prompt:
    "Given a grid where 1 is land and 0 is water with exactly one island (no lakes), " +
    "return the perimeter of the island.",
  topics: ["Array", "Depth-First Search", "Breadth-First Search", "Matrix"],
  tags: ["Array", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => perimeterSteps(input),
  Renderer: PerimeterRenderer,
};
