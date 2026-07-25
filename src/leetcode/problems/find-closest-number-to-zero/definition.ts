import type { LeetCodeProblem } from "../../types";
import type { ClosestZeroData } from "./algorithm";
import { closestZeroSteps } from "./algorithm";
import { CODE } from "./code";
import { ClosestZeroRenderer } from "./ClosestZeroRenderer";

export const findClosestNumberToZeroProblem: LeetCodeProblem<number[], ClosestZeroData, Record<string, never>> = {
  id: "find-closest-number-to-zero",
  number: 2239,
  title: "Find Closest Number to Zero",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-closest-number-to-zero/",
  summary: "Scan for the smallest absolute value, breaking ties toward the larger (positive) number.",
  prompt:
    "Given an integer array nums, return the number with the smallest absolute value. If two " +
    "numbers are equally close to zero, return the larger one.",
  topics: ["Array"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [-4, -2, 1, 4, 8, -2, 2],
  defaultOptions: {},
  buildSteps: (input) => closestZeroSteps(input),
  Renderer: ClosestZeroRenderer,
};
