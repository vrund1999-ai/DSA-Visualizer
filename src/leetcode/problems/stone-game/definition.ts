import type { LeetCodeProblem } from "../../types";
import type { StoneData } from "./algorithm";
import { stoneSteps } from "./algorithm";
import { CODE } from "./code";
import { StoneRenderer } from "./StoneRenderer";

export const stoneGameProblem: LeetCodeProblem<number[], StoneData, Record<string, never>> = {
  id: "stone-game",
  number: 877,
  title: "Stone Game",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/stone-game/",
  summary: "Interval DP on the score lead: take an end and subtract the opponent's best over the remaining piles.",
  prompt:
    "Alice and Bob take turns removing a pile from either end of a row of stone piles, each maximizing " +
    "their own stones. With Alice first, return true if she wins.",
  topics: ["Array", "Math", "Dynamic Programming", "Game Theory"],
  tags: ["Dynamic Programming", "Game Theory"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 3, 4, 5],
  defaultOptions: {},
  buildSteps: (input) => stoneSteps(input),
  Renderer: StoneRenderer,
};
