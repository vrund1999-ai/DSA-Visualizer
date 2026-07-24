import type { LeetCodeProblem } from "../../types";
import type { RottingData } from "./algorithm";
import { rottingSteps } from "./algorithm";
import { CODE } from "./code";
import { RottingRenderer } from "./RottingRenderer";

export const rottingOrangesProblem: LeetCodeProblem<
  number[][],
  RottingData,
  Record<string, never>
> = {
  id: "rotting-oranges",
  number: 994,
  title: "Rotting Oranges",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/rotting-oranges/",
  summary: "Minutes for rot to spread, via multi-source BFS.",
  prompt:
    "In a grid, 0 = empty, 1 = fresh orange, 2 = rotten. Each minute, a rotten " +
    "orange rots its 4-directional fresh neighbours. Return the minutes until no " +
    "fresh orange remains, or -1 if impossible.",
  topics: ["Array", "Breadth-First Search", "Matrix"],
  tags: ["Array", "Breadth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 55.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => rottingSteps(input),
  Renderer: RottingRenderer,
};
