import type { LeetCodeProblem } from "../../types";
import type { BinarySubarrayData } from "./algorithm";
import { binarySubarraySteps } from "./algorithm";
import { CODE } from "./code";
import { BinarySubarrayRenderer } from "./BinarySubarrayRenderer";

interface BinarySubarrayInput {
  nums: number[];
  goal: number;
}

export const binarySubarraysWithSumProblem: LeetCodeProblem<BinarySubarrayInput, BinarySubarrayData, Record<string, never>> = {
  id: "binary-subarrays-with-sum",
  number: 930,
  title: "Binary Subarrays With Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/binary-subarrays-with-sum/",
  summary: "Prefix-sum hash map counts subarrays whose sum equals the goal.",
  prompt:
    "Given a binary array nums and an integer goal, return the number of non-empty " +
    "subarrays whose elements sum to goal.",
  topics: ["Array", "Hash Table", "Sliding Window", "Prefix Sum"],
  tags: ["Array", "Hash Table", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 0, 1, 0, 1], goal: 2 }),
  defaultOptions: {},
  buildSteps: (input) => binarySubarraySteps(input.nums, input.goal),
  Renderer: BinarySubarrayRenderer,
};
