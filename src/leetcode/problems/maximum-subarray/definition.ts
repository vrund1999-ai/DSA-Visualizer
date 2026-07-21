import type { LeetCodeProblem } from "../../types";
import type { MaxSubData } from "./algorithm";
import { maxSubArraySteps } from "./algorithm";
import { CODE } from "./code";
import { MaxSubRenderer } from "./MaxSubRenderer";

export const maximumSubarrayProblem: LeetCodeProblem<
  number[],
  MaxSubData,
  Record<string, never>
> = {
  id: "maximum-subarray",
  number: 53,
  title: "Maximum Subarray",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-subarray/",
  summary: "Largest sum of a contiguous subarray (Kadane's algorithm).",
  prompt:
    "Given an integer array `nums`, find the contiguous subarray with the " +
    "largest sum and return that sum.",
  topics: ["Array", "Divide and Conquer", "Dynamic Programming"],
  tags: ["Array", "Divide and Conquer", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 70.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  defaultOptions: {},
  buildSteps: (input) => maxSubArraySteps(input),
  Renderer: MaxSubRenderer,
};
