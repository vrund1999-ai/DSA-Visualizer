import type { LeetCodeProblem } from "../../types";
import type { MinCostData } from "./algorithm";
import { minCostSteps } from "./algorithm";
import { CODE } from "./code";
import { MinCostRenderer } from "./MinCostRenderer";

export const minCostClimbingStairsProblem: LeetCodeProblem<
  number[],
  MinCostData,
  Record<string, never>
> = {
  id: "min-cost-climbing-stairs",
  number: 746,
  title: "Min Cost Climbing Stairs",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/min-cost-climbing-stairs/",
  summary: "Cheapest way to the top climbing 1 or 2 steps (DP).",
  prompt:
    "Each index of `cost` is the price to step off that stair. You can start at " +
    "step 0 or 1 and climb one or two stairs at a time. Return the minimum total " +
    "cost to reach the top (just past the last stair).",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
  defaultOptions: {},
  buildSteps: (input) => minCostSteps(input),
  Renderer: MinCostRenderer,
};
