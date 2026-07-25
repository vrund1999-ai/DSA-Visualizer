import type { LeetCodeProblem } from "../../types";
import type { StockFeeData } from "./algorithm";
import { stockFeeSteps } from "./algorithm";
import { CODE } from "./code";
import { StockFeeRenderer } from "./StockFeeRenderer";

interface StockFeeInput {
  prices: number[];
  fee: number;
}

export const stockWithFeeProblem: LeetCodeProblem<StockFeeInput, StockFeeData, Record<string, never>> = {
  id: "best-time-to-buy-and-sell-stock-with-transaction-fee",
  number: 714,
  title: "Best Time to Buy and Sell Stock with Transaction Fee",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
  summary: "Two rolling DP states (cash / hold) updated each day, paying a fee per sale.",
  prompt:
    "You may complete as many transactions as you like but pay `fee` per transaction. " +
    "Return the maximum profit, holding at most one share at a time.",
  topics: ["Array", "Dynamic Programming", "Greedy"],
  tags: ["Array", "Dynamic Programming", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ prices: [1, 3, 2, 8, 4, 9], fee: 2 }),
  defaultOptions: {},
  buildSteps: (input) => stockFeeSteps(input.prices, input.fee),
  Renderer: StockFeeRenderer,
};
