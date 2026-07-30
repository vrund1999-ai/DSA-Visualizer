import type { LeetCodeProblem } from "../../types";
import type { KSubsetData } from "./algorithm";
import { kSubsetSteps } from "./algorithm";
import { CODE } from "./code";
import { KSubsetRenderer } from "./KSubsetRenderer";

interface KSubsetInput {
  nums: number[];
  k: number;
}

export const partitionKSubsetsProblem: LeetCodeProblem<KSubsetInput, KSubsetData, Record<string, never>> = {
  id: "partition-to-k-equal-sum-subsets",
  number: 698,
  title: "Partition to K Equal Sum Subsets",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
  summary: "Backtrack the largest numbers first into k buckets, each capped at total/k; skip interchangeable empties.",
  prompt: "Given an array nums and integer k, determine whether it can be split into k non-empty subsets with equal sums.",
  topics: ["Array", "Dynamic Programming", "Backtracking", "Bitmask"],
  tags: ["Backtracking", "Bitmask"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(k · 2^n)", timeWorst: "O(k · 2^n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [4, 3, 2, 3, 5, 2, 1], k: 4 }),
  defaultOptions: {},
  buildSteps: (input) => kSubsetSteps(input.nums, input.k),
  Renderer: KSubsetRenderer,
};
