import type { LeetCodeProblem } from "../../types";
import type { KPairsData } from "./algorithm";
import { kPairsSteps } from "./algorithm";
import { CODE } from "./code";
import { KPairsRenderer } from "./KPairsRenderer";

interface KPairsInput {
  nums1: number[];
  nums2: number[];
  k: number;
}

export const findKPairsSmallestSumsProblem: LeetCodeProblem<KPairsInput, KPairsData, Record<string, never>> = {
  id: "find-k-pairs-with-smallest-sums",
  number: 373,
  title: "Find K Pairs with Smallest Sums",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
  summary: "A min-heap over a sorted-sum grid pops pairs in increasing order, expanding right/down neighbors.",
  prompt:
    "Given two sorted arrays and an integer k, return the k pairs (u, v) with u from nums1 and v from " +
    "nums2 that have the smallest sums.",
  topics: ["Array", "Heap", "Sorting"],
  tags: ["Heap", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(k log k)", timeWorst: "O(k log k)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums1: [1, 7, 11], nums2: [2, 4, 6], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => kPairsSteps(input.nums1, input.nums2, input.k),
  Renderer: KPairsRenderer,
};
