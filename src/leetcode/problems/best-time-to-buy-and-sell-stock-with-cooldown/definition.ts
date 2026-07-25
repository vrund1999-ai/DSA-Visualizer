import type { LeetCodeProblem } from "../../types";
import type { CooldownData } from "./algorithm";
import { cooldownSteps } from "./algorithm";
import { CODE } from "./code";
import { CooldownRenderer } from "./CooldownRenderer";

export const bestTimeCooldownProblem: LeetCodeProblem<number[], CooldownData, Record<string, never>> = {
  id: "best-time-to-buy-and-sell-stock-with-cooldown",
  number: 309,
  title: "Best Time to Buy and Sell Stock with Cooldown",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
  summary: "Roll hold/sold/rest states; buying always comes from rest, enforcing the one-day cooldown.",
  prompt:
    "Given daily prices, maximize profit from unlimited transactions with the rule that after " +
    "selling you must cooldown one day before buying again.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 0, 2],
  defaultOptions: {},
  buildSteps: (input) => cooldownSteps(input),
  Renderer: CooldownRenderer,
};
