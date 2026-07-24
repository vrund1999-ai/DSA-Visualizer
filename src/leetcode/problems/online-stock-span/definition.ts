import type { LeetCodeProblem } from "../../types";
import type { StockSpanData } from "./algorithm";
import { stockSpanSteps } from "./algorithm";
import { CODE } from "./code";
import { StockSpanRenderer } from "./StockSpanRenderer";

export const onlineStockSpanProblem: LeetCodeProblem<number[], StockSpanData, Record<string, never>> = {
  id: "online-stock-span",
  number: 901,
  title: "Online Stock Span",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/online-stock-span/",
  summary: "Monotonic stack of [price, span] answers each day's span in O(1) amortized.",
  prompt:
    "Design a StockSpanner that, for each daily price, returns the stock's span: the " +
    "number of consecutive days (up to and including today) the price was less than or " +
    "equal to today's price.",
  topics: ["Stack", "Design", "Monotonic Stack", "Data Stream"],
  tags: ["Stack", "Design", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 46.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) amortized", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [100, 80, 60, 70, 60, 75, 85],
  defaultOptions: {},
  buildSteps: (input) => stockSpanSteps(input),
  Renderer: StockSpanRenderer,
};
