import type { LeetCodeProblem } from "../../types";
import type { GridGameData } from "./algorithm";
import { gridGameSteps } from "./algorithm";
import { CODE } from "./code";
import { GridGameRenderer } from "./GridGameRenderer";

export const gridGameProblem: LeetCodeProblem<number[][], GridGameData, Record<string, never>> = {
  id: "grid-game",
  number: 2017,
  title: "Grid Game",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/grid-game/",
  summary: "Robot 1's path is a drop column; robot 2 takes the larger leftover strip, so robot 1 minimizes that maximum.",
  prompt:
    "Two robots traverse a 2×n grid from top-left to bottom-right (moving right/down), collecting points " +
    "and zeroing cells they visit. Robot 1 minimizes, robot 2 maximizes. Return robot 2's points.",
  topics: ["Array", "Matrix", "Prefix Sum"],
  tags: ["Matrix", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 3, 1, 15],
    [1, 3, 3, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => gridGameSteps(input),
  Renderer: GridGameRenderer,
};
