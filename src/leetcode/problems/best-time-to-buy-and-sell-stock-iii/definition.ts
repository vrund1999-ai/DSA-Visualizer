import type { LeetCodeProblem } from "../../types";
import type { StockIIIData } from "./algorithm";
import { stockIIISteps } from "./algorithm";
import { CODE } from "./code";
import { StockIIIRenderer } from "./StockIIIRenderer";

export const bestTimeToBuyStockIIIProblem: LeetCodeProblem<number[], StockIIIData, Record<string, never>> = {
  id: "best-time-to-buy-and-sell-stock-iii",
  number: 123,
  title: "Best Time to Buy and Sell Stock III",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
  summary: "Roll four states — buy1, sell1, buy2, sell2 — to allow at most two transactions.",
  prompt:
    "Given daily prices, find the maximum profit from at most two buy/sell transactions " +
    "(you must sell before buying again).",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 3, 5, 0, 0, 3, 1, 4],
  defaultOptions: {},
  buildSteps: (input) => stockIIISteps(input),
  Renderer: StockIIIRenderer,
};
