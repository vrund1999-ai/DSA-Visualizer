import type { LeetCodeProblem } from "../../types";
import type { CombSum4Data } from "./algorithm";
import { combSum4Steps } from "./algorithm";
import { CODE } from "./code";
import { CombSum4Renderer } from "./CombSum4Renderer";

interface CombSum4Input {
  nums: number[];
  target: number;
}

export const combinationSum4Problem: LeetCodeProblem<CombSum4Input, CombSum4Data, Record<string, never>> = {
  id: "combination-sum-iv",
  number: 377,
  title: "Combination Sum IV",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/combination-sum-iv/",
  summary: "Order matters, so dp[t] sums dp[t − num] over every number — each smaller combination gets num appended.",
  prompt:
    "Given distinct integers nums and a target, count the number of ordered combinations (sequences) that " +
    "sum to target.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(target · n)", timeWorst: "O(target · n)", space: "O(target)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 3], target: 4 }),
  defaultOptions: {},
  buildSteps: (input) => combSum4Steps(input.nums, input.target),
  Renderer: CombSum4Renderer,
};
