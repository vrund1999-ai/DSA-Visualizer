import type { LeetCodeProblem } from "../../types";
import type { ThreeSubData } from "./algorithm";
import { threeSubSteps } from "./algorithm";
import { CODE } from "./code";
import { ThreeSubRenderer } from "./ThreeSubRenderer";

interface ThreeSubInput {
  nums: number[];
  k: number;
}

export const maxSum3NonOverlappingProblem: LeetCodeProblem<ThreeSubInput, ThreeSubData, Record<string, never>> = {
  id: "maximum-sum-of-3-non-overlapping-subarrays",
  number: 689,
  title: "Maximum Sum of 3 Non-Overlapping Subarrays",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
  summary: "Fix the middle window; prefix best-left and best-right arrays give the optimal flanking windows.",
  prompt:
    "Given an array nums and integer k, find three non-overlapping subarrays of length k with maximum " +
    "total sum, and return their starting indices (lexicographically smallest).",
  topics: ["Array", "Dynamic Programming", "Prefix Sum"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 1, 2, 6, 7, 5, 1], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => threeSubSteps(input.nums, input.k),
  Renderer: ThreeSubRenderer,
};
