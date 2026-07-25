import type { LeetCodeProblem } from "../../types";
import type { MonotonicData } from "./algorithm";
import { monotonicSteps } from "./algorithm";
import { CODE } from "./code";
import { MonotonicRenderer } from "./MonotonicRenderer";

export const longestMonotonicSubarrayProblem: LeetCodeProblem<number[], MonotonicData, Record<string, never>> = {
  id: "longest-strictly-increasing-or-strictly-decreasing-subarray",
  number: 3105,
  title: "Longest Strictly Increasing or Strictly Decreasing Subarray",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/",
  summary: "Track increasing and decreasing run lengths; the max of either is the answer.",
  prompt:
    "Return the length of the longest subarray of nums that is either strictly increasing " +
    "or strictly decreasing.",
  topics: ["Array"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 4, 3, 3, 2],
  defaultOptions: {},
  buildSteps: (input) => monotonicSteps(input),
  Renderer: MonotonicRenderer,
};
