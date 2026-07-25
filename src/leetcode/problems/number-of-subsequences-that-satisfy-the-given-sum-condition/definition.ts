import type { LeetCodeProblem } from "../../types";
import type { NumSubseqData } from "./algorithm";
import { numSubseqSteps } from "./algorithm";
import { CODE } from "./code";
import { NumSubseqRenderer } from "./NumSubseqRenderer";

interface NumSubseqInput {
  nums: number[];
  target: number;
}

export const numberOfSubsequencesProblem: LeetCodeProblem<NumSubseqInput, NumSubseqData, Record<string, never>> = {
  id: "number-of-subsequences-that-satisfy-the-given-sum-condition",
  number: 1498,
  title: "Number of Subsequences That Satisfy the Given Sum Condition",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/",
  summary: "Sort; two pointers on min/max, adding 2^(gap) whenever the min+max pair fits the target.",
  prompt:
    "Count the non-empty subsequences of nums whose minimum plus maximum element is ≤ target, " +
    "modulo 1e9+7.",
  topics: ["Array", "Two Pointers", "Binary Search", "Sorting"],
  tags: ["Array", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [3, 5, 6, 7], target: 9 }),
  defaultOptions: {},
  buildSteps: (input) => numSubseqSteps(input.nums, input.target),
  Renderer: NumSubseqRenderer,
};
