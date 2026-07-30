import type { LeetCodeProblem } from "../../types";
import type { ShopPenaltyData } from "./algorithm";
import { shopPenaltySteps } from "./algorithm";
import { CODE } from "./code";
import { ShopPenaltyRenderer } from "./ShopPenaltyRenderer";

interface ShopPenaltyInput {
  customers: string;
}

export const minPenaltyShopProblem: LeetCodeProblem<ShopPenaltyInput, ShopPenaltyData, Record<string, never>> = {
  id: "minimum-penalty-for-a-shop",
  number: 2483,
  title: "Minimum Penalty for a Shop",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-penalty-for-a-shop/",
  summary: "Sweep closing hours, adjusting a running penalty by −1 for each 'Y' opened and +1 for each 'N'; keep the earliest minimum.",
  prompt:
    "For a shop with hourly customer log ('Y'/'N'), closing at hour j penalizes open hours with no customer " +
    "and closed hours with a customer. Return the earliest hour that minimizes the penalty.",
  topics: ["String", "Prefix Sum"],
  tags: ["Prefix Sum", "String"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ customers: "YYNY" }),
  defaultOptions: {},
  buildSteps: (input) => shopPenaltySteps(input.customers),
  Renderer: ShopPenaltyRenderer,
};
