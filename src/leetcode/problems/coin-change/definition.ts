import type { LeetCodeProblem } from "../../types";
import type { CoinChangeData, CoinChangeInput } from "./algorithm";
import { coinChangeSteps } from "./algorithm";
import { CODE } from "./code";
import { CoinChangeRenderer } from "./CoinChangeRenderer";

export const coinChangeProblem: LeetCodeProblem<
  CoinChangeInput,
  CoinChangeData,
  Record<string, never>
> = {
  id: "coin-change",
  number: 322,
  title: "Coin Change",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/coin-change/",
  summary: "Fewest coins to make an amount (bottom-up DP).",
  prompt:
    "Given coin denominations `coins` and a target `amount`, return the fewest " +
    "coins needed to make up that amount, or -1 if it can't be made. You may use " +
    "each coin any number of times.",
  topics: ["Array", "Dynamic Programming", "Breadth-First Search"],
  tags: ["Array", "Dynamic Programming", "Breadth-First Search"],
  companies: ["Bloomberg"],
  frequency: 62.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(amount·coins)", timeWorst: "O(amount·coins)", space: "O(amount)" },
  inputSchema: [],
  makeDefaultInput: () => ({ coins: [1, 2, 5], amount: 6 }),
  defaultOptions: {},
  buildSteps: (input) => coinChangeSteps(input),
  Renderer: CoinChangeRenderer,
};
