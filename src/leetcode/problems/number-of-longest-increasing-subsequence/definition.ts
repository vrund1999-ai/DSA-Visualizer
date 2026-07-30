import type { LeetCodeProblem } from "../../types";
import type { NumLisData } from "./algorithm";
import { numLisSteps } from "./algorithm";
import { CODE } from "./code";
import { NumLisRenderer } from "./NumLisRenderer";

export const numberOfLisProblem: LeetCodeProblem<number[], NumLisData, Record<string, never>> = {
  id: "number-of-longest-increasing-subsequence",
  number: 673,
  title: "Number of Longest Increasing Subsequence",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
  summary: "Parallel DP: track both the longest chain ending at each index and how many achieve it.",
  prompt: "Given an integer array nums, return the number of longest strictly increasing subsequences.",
  topics: ["Array", "Dynamic Programming", "Binary Indexed Tree"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 5, 4, 7],
  defaultOptions: {},
  buildSteps: (input) => numLisSteps(input),
  Renderer: NumLisRenderer,
};
