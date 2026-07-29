import type { LeetCodeProblem } from "../../types";
import type { IntBreakData } from "./algorithm";
import { intBreakSteps } from "./algorithm";
import { CODE } from "./code";
import { IntBreakRenderer } from "./IntBreakRenderer";

export const integerBreakProblem: LeetCodeProblem<number, IntBreakData, Record<string, never>> = {
  id: "integer-break",
  number: 343,
  title: "Integer Break",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/integer-break/",
  summary: "dp[i] = best of j·(i−j) or j·dp[i−j] over all first parts j — break for the maximum product.",
  prompt:
    "Given an integer n, break it into the sum of at least two positive integers and maximize the " +
    "product of those integers. Return the maximum product.",
  topics: ["Math", "Dynamic Programming"],
  tags: ["Math", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 10,
  defaultOptions: {},
  buildSteps: (input) => intBreakSteps(input),
  Renderer: IntBreakRenderer,
};
