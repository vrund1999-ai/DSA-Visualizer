import type { LeetCodeProblem } from "../../types";
import type { LISData } from "./algorithm";
import { lisSteps } from "./algorithm";
import { CODE } from "./code";
import { LISRenderer } from "./LISRenderer";

export const longestIncreasingSubsequenceProblem: LeetCodeProblem<
  number[],
  LISData,
  Record<string, never>
> = {
  id: "longest-increasing-subsequence",
  number: 300,
  title: "Longest Increasing Subsequence",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-increasing-subsequence/",
  summary: "Length of the longest strictly increasing subsequence (DP).",
  prompt:
    "Given an integer array `nums`, return the length of the longest strictly " +
    "increasing subsequence (elements need not be contiguous).",
  topics: ["Array", "Binary Search", "Dynamic Programming"],
  tags: ["Array", "Binary Search", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 52.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [10, 9, 2, 5, 3, 7, 101, 18],
  defaultOptions: {},
  buildSteps: (input) => lisSteps(input),
  Renderer: LISRenderer,
};
