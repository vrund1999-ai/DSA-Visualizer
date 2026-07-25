import type { LeetCodeProblem } from "../../types";
import type { DivByKData } from "./algorithm";
import { divByKSteps } from "./algorithm";
import { CODE } from "./code";
import { DivByKRenderer } from "./DivByKRenderer";

interface DivByKInput {
  nums: number[];
  k: number;
}

export const subarraySumsDivByKProblem: LeetCodeProblem<DivByKInput, DivByKData, Record<string, never>> = {
  id: "subarray-sums-divisible-by-k",
  number: 974,
  title: "Subarray Sums Divisible by K",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
  summary: "Prefix sums sharing a remainder mod k bound a divisible subarray.",
  prompt:
    "Given an integer array nums and an integer k, return the number of non-empty " +
    "subarrays whose sum is divisible by k.",
  topics: ["Array", "Hash Table", "Prefix Sum"],
  tags: ["Array", "Hash Table", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [4, 5, 0, -2, -3, 1], k: 5 }),
  defaultOptions: {},
  buildSteps: (input) => divByKSteps(input.nums, input.k),
  Renderer: DivByKRenderer,
};
