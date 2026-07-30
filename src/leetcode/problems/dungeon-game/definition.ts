import type { LeetCodeProblem } from "../../types";
import type { DungeonData } from "./algorithm";
import { dungeonSteps } from "./algorithm";
import { CODE } from "./code";
import { DungeonRenderer } from "./DungeonRenderer";

export const dungeonGameProblem: LeetCodeProblem<number[][], DungeonData, Record<string, never>> = {
  id: "dungeon-game",
  number: 174,
  title: "Dungeon Game",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/dungeon-game/",
  summary: "DP backward from the goal: entering a cell you need enough HP to survive it and reach the cheaper next cell.",
  prompt:
    "A knight starts top-left and must reach the princess bottom-right, moving only right or down. Each " +
    "cell adds or subtracts health; health must stay ≥ 1 at all times. Return the minimum starting health.",
  topics: ["Array", "Dynamic Programming", "Matrix"],
  tags: ["Dynamic Programming", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ],
  defaultOptions: {},
  buildSteps: (input) => dungeonSteps(input),
  Renderer: DungeonRenderer,
};
