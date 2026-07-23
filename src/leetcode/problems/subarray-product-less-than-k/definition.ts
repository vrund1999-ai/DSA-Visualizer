import type { LeetCodeProblem } from "../../types";
import type { SubProductData, SubProductInput } from "./algorithm";
import { subProductSteps } from "./algorithm";
import { CODE } from "./code";
import { SubProductRenderer } from "./SubProductRenderer";

export const subarrayProductProblem: LeetCodeProblem<
  SubProductInput,
  SubProductData,
  Record<string, never>
> = {
  id: "subarray-product-less-than-k",
  number: 713,
  title: "Subarray Product Less Than K",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/subarray-product-less-than-k/",
  summary: "Count subarrays with product below k (sliding window).",
  prompt:
    "Given an array of positive integers `nums` and an integer `k`, return the " +
    "number of contiguous subarrays whose product is strictly less than k.",
  topics: ["Array", "Sliding Window", "Prefix Sum"],
  tags: ["Array", "Sliding Window", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 30,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [10, 5, 2, 6], k: 100 }),
  defaultOptions: {},
  buildSteps: (input) => subProductSteps(input),
  Renderer: SubProductRenderer,
};
