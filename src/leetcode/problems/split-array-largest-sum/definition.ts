import type { LeetCodeProblem } from "../../types";
import type { SplitArrayData } from "./algorithm";
import { splitArraySteps } from "./algorithm";
import { CODE } from "./code";
import { SplitArrayRenderer } from "./SplitArrayRenderer";

interface SplitArrayInput {
  nums: number[];
  k: number;
}

export const splitArrayLargestSumProblem: LeetCodeProblem<SplitArrayInput, SplitArrayData, Record<string, never>> = {
  id: "split-array-largest-sum",
  number: 410,
  title: "Split Array Largest Sum",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/split-array-largest-sum/",
  summary: "Binary search the minimum possible largest subarray sum; greedily verify.",
  prompt:
    "Split nums into k non-empty contiguous subarrays to minimize the largest subarray " +
    "sum. Return that minimized largest sum.",
  topics: ["Array", "Binary Search", "Dynamic Programming", "Greedy"],
  tags: ["Array", "Binary Search", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 46.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log Σ)", timeWorst: "O(n log Σ)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [7, 2, 5, 10, 8], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => splitArraySteps(input.nums, input.k),
  Renderer: SplitArrayRenderer,
};
