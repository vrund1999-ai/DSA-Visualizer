import type { LeetCodeProblem } from "../../types";
import type { MaxSumData } from "./algorithm";
import { maxSumSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxSumRenderer } from "./MaxSumRenderer";

export const maxSumEqualDigitSumProblem: LeetCodeProblem<number[], MaxSumData, Record<string, never>> = {
  id: "max-sum-of-a-pair-with-equal-sum-of-digits",
  number: 2342,
  title: "Max Sum of a Pair With Equal Sum of Digits",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/",
  summary: "Bucket by digit sum, keeping the largest value per bucket to pair against.",
  prompt:
    "Given nums, find two distinct indices i, j whose digit sums are equal and nums[i] + " +
    "nums[j] is maximum; return that sum, or -1 if no such pair exists.",
  topics: ["Array", "Hash Table", "Sorting", "Heap"],
  tags: ["Array", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·d)", timeWorst: "O(n·d)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [18, 43, 36, 13, 7],
  defaultOptions: {},
  buildSteps: (input) => maxSumSteps(input),
  Renderer: MaxSumRenderer,
};
