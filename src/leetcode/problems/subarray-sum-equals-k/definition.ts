import type { LeetCodeProblem } from "../../types";
import type { SubarrayData } from "./algorithm";
import { subarraySumSteps } from "./algorithm";
import { CODE } from "./code";
import { SubarrayRenderer } from "./SubarrayRenderer";

export interface SubarrayInput {
  nums: number[];
  k: number;
}

export const subarraySumEqualsKProblem: LeetCodeProblem<
  SubarrayInput,
  SubarrayData,
  Record<string, never>
> = {
  id: "subarray-sum-equals-k",
  number: 560,
  title: "Subarray Sum Equals K",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/subarray-sum-equals-k/",
  summary: "Count subarrays summing to k with prefix sums + a hash map.",
  prompt:
    "Given an integer array `nums` and an integer `k`, return the total number " +
    "of contiguous subarrays whose elements sum to exactly `k`.",
  topics: ["Array", "Hash Table", "Prefix Sum"],
  tags: ["Array", "Hash Table", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 71.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 1, 2, 1], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => subarraySumSteps(input.nums, input.k),
  Renderer: SubarrayRenderer,
};
