import type { LeetCodeProblem } from "../../types";
import type { MinSubarrayData, MinSubarrayInput } from "./algorithm";
import { minSubarraySteps } from "./algorithm";
import { CODE } from "./code";
import { MinSubarrayRenderer } from "./MinSubarrayRenderer";

export const minSizeSubarraySumProblem: LeetCodeProblem<
  MinSubarrayInput,
  MinSubarrayData,
  Record<string, never>
> = {
  id: "minimum-size-subarray-sum",
  number: 209,
  title: "Minimum Size Subarray Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-size-subarray-sum/",
  summary: "Shortest subarray with sum ≥ target (sliding window).",
  prompt:
    "Given a `target` and an array of positive integers `nums`, return the " +
    "minimal length of a contiguous subarray whose sum is ≥ target, or 0 if none.",
  topics: ["Array", "Binary Search", "Sliding Window", "Prefix Sum"],
  tags: ["Array", "Binary Search", "Sliding Window", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 49.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ target: 7, nums: [2, 3, 1, 2, 4, 3] }),
  defaultOptions: {},
  buildSteps: (input) => minSubarraySteps(input),
  Renderer: MinSubarrayRenderer,
};
