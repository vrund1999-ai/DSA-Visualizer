import type { LeetCodeProblem } from "../../types";
import type { CoinChangeIIData } from "./algorithm";
import { coinChangeIISteps } from "./algorithm";
import { CODE } from "./code";
import { CoinChangeIIRenderer } from "./CoinChangeIIRenderer";

interface CoinChangeIIInput {
  amount: number;
  coins: number[];
}

export const coinChangeIIProblem: LeetCodeProblem<CoinChangeIIInput, CoinChangeIIData, Record<string, never>> = {
  id: "coin-change-ii",
  number: 518,
  title: "Coin Change II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/coin-change-ii/",
  summary: "Coin-outer / amount-inner DP counts each combination once: dp[a] += dp[a − coin].",
  prompt:
    "Given an amount and coin denominations (unlimited supply), return the number of distinct " +
    "combinations that sum to the amount.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(amount · coins)", timeWorst: "O(amount · coins)", space: "O(amount)" },
  inputSchema: [],
  makeDefaultInput: () => ({ amount: 5, coins: [1, 2, 5] }),
  defaultOptions: {},
  buildSteps: (input) => coinChangeIISteps(input.amount, input.coins),
  Renderer: CoinChangeIIRenderer,
};
