import type { LeetCodeProblem } from "../../types";
import type { KSumPairsData } from "./algorithm";
import { kSumPairsSteps } from "./algorithm";
import { CODE } from "./code";
import { KSumPairsRenderer } from "./KSumPairsRenderer";

interface KSumPairsInput {
  nums: number[];
  k: number;
}

export const maxKSumPairsProblem: LeetCodeProblem<KSumPairsInput, KSumPairsData, Record<string, never>> = {
  id: "max-number-of-k-sum-pairs",
  number: 1679,
  title: "Max Number of K-Sum Pairs",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/max-number-of-k-sum-pairs/",
  summary: "Sort, then two pointers pair the ends: equal to k removes a pair, else move the far side inward.",
  prompt:
    "In one operation you remove two numbers whose sum is k. Given nums and k, return the maximum " +
    "number of such operations.",
  topics: ["Array", "Hash Table", "Two Pointers", "Sorting"],
  tags: ["Array", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [3, 1, 3, 4, 3], k: 6 }),
  defaultOptions: {},
  buildSteps: (input) => kSumPairsSteps(input.nums, input.k),
  Renderer: KSumPairsRenderer,
};
