import type { LeetCodeProblem } from "../../types";
import type { ReversePairsData } from "./algorithm";
import { reversePairsSteps } from "./algorithm";
import { CODE } from "./code";
import { ReversePairsRenderer } from "./ReversePairsRenderer";

export const reversePairsProblem: LeetCodeProblem<number[], ReversePairsData, Record<string, never>> = {
  id: "reverse-pairs",
  number: 493,
  title: "Reverse Pairs",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/reverse-pairs/",
  summary: "Merge sort; during each merge a two-pointer sweep counts i<j with nums[i] > 2·nums[j].",
  prompt:
    "Given an integer array nums, return the number of reverse pairs — index pairs (i, j) with " +
    "i < j and nums[i] > 2 · nums[j].",
  topics: ["Array", "Binary Search", "Divide and Conquer", "Merge Sort", "Segment Tree"],
  tags: ["Array", "Merge Sort", "Divide and Conquer"],
  companies: ["Bloomberg"],
  frequency: 44.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 2, 3, 1],
  defaultOptions: {},
  buildSteps: (input) => reversePairsSteps(input),
  Renderer: ReversePairsRenderer,
};
