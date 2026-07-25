import type { LeetCodeProblem } from "../../types";
import type { TargetSumData } from "./algorithm";
import { targetSumSteps } from "./algorithm";
import { CODE } from "./code";
import { TargetSumRenderer } from "./TargetSumRenderer";

interface TargetSumInput {
  nums: number[];
  target: number;
}

export const targetSumProblem: LeetCodeProblem<TargetSumInput, TargetSumData, Record<string, never>> = {
  id: "target-sum",
  number: 494,
  title: "Target Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/target-sum/",
  summary: "Count sign assignments via a running-sum → ways DP map.",
  prompt:
    "Given an integer array nums and a target, prepend + or − to each number so the " +
    "resulting expression equals target. Return the number of ways to do so.",
  topics: ["Array", "Dynamic Programming", "Backtracking"],
  tags: ["Array", "Dynamic Programming", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·sum)", timeWorst: "O(n·sum)", space: "O(sum)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 1, 1, 1, 1], target: 3 }),
  defaultOptions: {},
  buildSteps: (input) => targetSumSteps(input.nums, input.target),
  Renderer: TargetSumRenderer,
};
