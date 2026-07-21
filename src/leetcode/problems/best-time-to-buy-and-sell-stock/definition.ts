import type { LeetCodeProblem } from "../../types";
import type { StockData } from "./algorithm";
import { stockSteps } from "./algorithm";
import { CODE } from "./code";
import { StockRenderer } from "./StockRenderer";

export const bestTimeToBuyStockProblem: LeetCodeProblem<
  number[],
  StockData,
  Record<string, never>
> = {
  id: "best-time-to-buy-and-sell-stock",
  number: 121,
  title: "Best Time to Buy and Sell Stock",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
  summary: "Maximize profit from a single buy-then-sell.",
  prompt:
    "Given an array `prices` where prices[i] is the price of a stock on day i, " +
    "return the maximum profit from buying on one day and selling on a later " +
    "day. If no profit is possible, return 0.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 84,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [7, 1, 5, 3, 6, 4],
  defaultOptions: {},
  buildSteps: (input) => stockSteps(input),
  Renderer: StockRenderer,
};
