import type { LeetCodeProblem } from "../../types";
import type { ErasureData } from "./algorithm";
import { erasureSteps } from "./algorithm";
import { CODE } from "./code";
import { ErasureRenderer } from "./ErasureRenderer";

export const maximumErasureValueProblem: LeetCodeProblem<number[], ErasureData, Record<string, never>> = {
  id: "maximum-erasure-value",
  number: 1695,
  title: "Maximum Erasure Value",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-erasure-value/",
  summary: "Sliding window of distinct values; advance the left edge on a duplicate and track the maximum sum.",
  prompt:
    "Return the maximum sum of a subarray consisting of unique elements (erasing exactly one such subarray " +
    "yields that score).",
  topics: ["Array", "Hash Table", "Sliding Window"],
  tags: ["Sliding Window", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 2, 4, 5, 6],
  defaultOptions: {},
  buildSteps: (input) => erasureSteps(input),
  Renderer: ErasureRenderer,
};
