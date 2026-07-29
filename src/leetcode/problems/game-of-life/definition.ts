import type { LeetCodeProblem } from "../../types";
import type { LifeData } from "./algorithm";
import { lifeSteps } from "./algorithm";
import { CODE } from "./code";
import { LifeRenderer } from "./LifeRenderer";

export const gameOfLifeProblem: LeetCodeProblem<number[][], LifeData, Record<string, never>> = {
  id: "game-of-life",
  number: 289,
  title: "Game of Life",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/game-of-life/",
  summary: "Compute each cell's next state from its current live-neighbor count into a fresh board.",
  prompt:
    "Given a board of live (1) and dead (0) cells, compute the next generation by Conway's rules " +
    "(under/overpopulation, survival, and birth) simultaneously.",
  topics: ["Array", "Matrix", "Simulation"],
  tags: ["Array", "Matrix", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => lifeSteps(input),
  Renderer: LifeRenderer,
};
