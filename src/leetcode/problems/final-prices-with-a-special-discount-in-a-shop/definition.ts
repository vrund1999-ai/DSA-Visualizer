import type { LeetCodeProblem } from "../../types";
import type { FinalPricesData } from "./algorithm";
import { finalPricesSteps } from "./algorithm";
import { CODE } from "./code";
import { FinalPricesRenderer } from "./FinalPricesRenderer";

interface FinalPricesInput {
  prices: number[];
}

export const finalPricesProblem: LeetCodeProblem<FinalPricesInput, FinalPricesData, Record<string, never>> = {
  id: "final-prices-with-a-special-discount-in-a-shop",
  number: 1475,
  title: "Final Prices With a Special Discount in a Shop",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",
  summary: "Each item is discounted by the next price ≤ it — resolved with a monotonic (descending) stack.",
  prompt:
    "For each item i, if there is a later item j with prices[j] ≤ prices[i], you get a discount of prices[j]; " +
    "otherwise no discount. Return the final price of each item.",
  topics: ["Array", "Stack", "Monotonic Stack"],
  tags: ["Monotonic Stack", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ prices: [8, 4, 6, 2, 3] }),
  defaultOptions: {},
  buildSteps: (input) => finalPricesSteps(input.prices),
  Renderer: FinalPricesRenderer,
};
