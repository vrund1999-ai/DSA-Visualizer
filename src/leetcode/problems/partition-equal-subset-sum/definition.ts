import type { LeetCodeProblem } from "../../types";
import type { PartitionData } from "./algorithm";
import { partitionSteps } from "./algorithm";
import { CODE } from "./code";
import { PartitionRenderer } from "./PartitionRenderer";

export const partitionEqualSubsetProblem: LeetCodeProblem<
  number[],
  PartitionData,
  Record<string, never>
> = {
  id: "partition-equal-subset-sum",
  number: 416,
  title: "Partition Equal Subset Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/partition-equal-subset-sum/",
  summary: "Split an array into two equal-sum halves (subset-sum DP).",
  prompt:
    "Given an integer array `nums`, return true if it can be partitioned into " +
    "two subsets with equal sums.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 47.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·sum)", timeWorst: "O(n·sum)", space: "O(sum)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 5, 11, 5],
  defaultOptions: {},
  buildSteps: (input) => partitionSteps(input),
  Renderer: PartitionRenderer,
};
