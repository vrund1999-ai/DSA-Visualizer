import type { LeetCodeProblem } from "../../types";
import type { SumPowersData } from "./algorithm";
import { sumPowersSteps } from "./algorithm";
import { CODE } from "./code";
import { SumPowersRenderer } from "./SumPowersRenderer";

interface SumPowersInput {
  n: number;
  x: number;
}

export const sumOfPowersProblem: LeetCodeProblem<SumPowersInput, SumPowersData, Record<string, never>> = {
  id: "ways-to-express-an-integer-as-sum-of-powers",
  number: 2787,
  title: "Ways to Express an Integer as Sum of Powers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/",
  summary: "A 0/1-knapsack count over the x-th powers ≤ n; dp[t] tallies ways to reach t, each power used once.",
  prompt:
    "Return the number of ways n can be expressed as a sum of the x-th powers of unique positive integers, " +
    "modulo 1e9+7.",
  topics: ["Dynamic Programming"],
  tags: ["Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·√ⁿ)", timeWorst: "O(n·n^(1/x))", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 10, x: 2 }),
  defaultOptions: {},
  buildSteps: (input) => sumPowersSteps(input.n, input.x),
  Renderer: SumPowersRenderer,
};
