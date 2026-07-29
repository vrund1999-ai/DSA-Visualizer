import type { LeetCodeProblem } from "../../types";
import type { MaxSubseqData } from "./algorithm";
import { maxSubseqSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxSubseqRenderer } from "./MaxSubseqRenderer";

interface MaxSubseqInput {
  nums: number[];
  k: number;
}

export const findSubsequenceLargestSumProblem: LeetCodeProblem<MaxSubseqInput, MaxSubseqData, Record<string, never>> = {
  id: "find-subsequence-of-length-k-with-the-largest-sum",
  number: 2099,
  title: "Find Subsequence of Length K With the Largest Sum",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/",
  summary: "Keep the k largest values (by index), then read them back in original order.",
  prompt:
    "Return any subsequence of nums of length k with the largest possible sum, preserving the elements' " +
    "original relative order.",
  topics: ["Array", "Hash Table", "Sorting", "Heap"],
  tags: ["Array", "Sorting", "Heap"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [2, 1, 3, 3], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => maxSubseqSteps(input.nums, input.k),
  Renderer: MaxSubseqRenderer,
};
