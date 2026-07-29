import type { LeetCodeProblem } from "../../types";
import type { WealthData } from "./algorithm";
import { wealthSteps } from "./algorithm";
import { CODE } from "./code";
import { WealthRenderer } from "./WealthRenderer";

export const richestCustomerWealthProblem: LeetCodeProblem<number[][], WealthData, Record<string, never>> = {
  id: "richest-customer-wealth",
  number: 1672,
  title: "Richest Customer Wealth",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/richest-customer-wealth/",
  summary: "Sum each customer's row of bank balances; return the maximum row sum.",
  prompt:
    "accounts[i][j] is the money customer i has in bank j. Return the wealth of the richest customer " +
    "(the largest total across a row).",
  topics: ["Array", "Matrix"],
  tags: ["Array", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 5],
    [7, 3],
    [3, 5],
  ],
  defaultOptions: {},
  buildSteps: (input) => wealthSteps(input),
  Renderer: WealthRenderer,
};
