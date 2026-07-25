import type { LeetCodeProblem } from "../../types";
import type { ContSubData } from "./algorithm";
import { contSubSteps } from "./algorithm";
import { CODE } from "./code";
import { ContSubRenderer } from "./ContSubRenderer";

interface ContSubInput {
  nums: number[];
  k: number;
}

export const continuousSubarraySumProblem: LeetCodeProblem<ContSubInput, ContSubData, Record<string, never>> = {
  id: "continuous-subarray-sum",
  number: 523,
  title: "Continuous Subarray Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/continuous-subarray-sum/",
  summary: "Prefix sums sharing a remainder mod k bound a divisible subarray of length ≥ 2.",
  prompt:
    "Given an integer array nums and integer k, return true if there is a subarray of " +
    "length at least 2 whose elements sum to a multiple of k.",
  topics: ["Array", "Hash Table", "Math", "Prefix Sum"],
  tags: ["Array", "Hash Table", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(min(n, k))" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [23, 2, 4, 6, 7], k: 6 }),
  defaultOptions: {},
  buildSteps: (input) => contSubSteps(input.nums, input.k),
  Renderer: ContSubRenderer,
};
