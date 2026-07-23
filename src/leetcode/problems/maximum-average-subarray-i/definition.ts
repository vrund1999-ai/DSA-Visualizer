import type { LeetCodeProblem } from "../../types";
import type { MaxAvgData, MaxAvgInput } from "./algorithm";
import { maxAvgSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxAvgRenderer } from "./MaxAvgRenderer";

export const maxAvgSubarrayProblem: LeetCodeProblem<
  MaxAvgInput,
  MaxAvgData,
  Record<string, never>
> = {
  id: "maximum-average-subarray-i",
  number: 643,
  title: "Maximum Average Subarray I",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/maximum-average-subarray-i/",
  summary: "Largest average of a k-length window (sliding window).",
  prompt:
    "Given an integer array `nums` and an integer `k`, find the contiguous " +
    "subarray of length k with the maximum average value and return that average.",
  topics: ["Array", "Sliding Window"],
  tags: ["Array", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 42.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 12, -5, -6, 50, 3], k: 4 }),
  defaultOptions: {},
  buildSteps: (input) => maxAvgSteps(input),
  Renderer: MaxAvgRenderer,
};
