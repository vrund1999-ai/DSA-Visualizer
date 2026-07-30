import type { LeetCodeProblem } from "../../types";
import type { PartitionData } from "./algorithm";
import { partitionSteps } from "./algorithm";
import { CODE } from "./code";
import { PartitionRenderer } from "./PartitionRenderer";

interface PartitionInput {
  arr: number[];
  k: number;
}

export const partitionArrayMaxSumProblem: LeetCodeProblem<PartitionInput, PartitionData, Record<string, never>> = {
  id: "partition-array-for-maximum-sum",
  number: 1043,
  title: "Partition Array for Maximum Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/partition-array-for-maximum-sum/",
  summary: "DP over prefixes: the last block has length 1…k and contributes its max value times its length.",
  prompt:
    "Partition an array into contiguous subarrays of length at most k. After partitioning, every value " +
    "in a subarray becomes that subarray's maximum. Return the largest possible sum of the result.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(nk)", timeWorst: "O(nk)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr: [1, 15, 7, 9, 2, 5, 10], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => partitionSteps(input.arr, input.k),
  Renderer: PartitionRenderer,
};
