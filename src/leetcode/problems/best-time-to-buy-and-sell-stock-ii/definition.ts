import type { LeetCodeProblem } from "../../types";
import type { StockIIData } from "./algorithm";
import { stockIISteps } from "./algorithm";
import { CODE } from "./code";
import { StockIIRenderer } from "./StockIIRenderer";

export const bestTimeStockIIProblem: LeetCodeProblem<
  number[],
  StockIIData,
  Record<string, never>
> = {
  id: "best-time-to-buy-and-sell-stock-ii",
  number: 122,
  title: "Best Time to Buy and Sell Stock II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
  summary: "Max profit with unlimited trades (sum the rises).",
  prompt:
    "Given daily `prices`, you may buy and sell as many times as you like " +
    "(holding at most one share). Return the maximum total profit.",
  topics: ["Array", "Dynamic Programming", "Greedy"],
  tags: ["Array", "Dynamic Programming", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 55.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [7, 1, 5, 3, 6, 4],
  defaultOptions: {},
  buildSteps: (input) => stockIISteps(input),
  Renderer: StockIIRenderer,
};
