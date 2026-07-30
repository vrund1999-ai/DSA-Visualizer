import type { LeetCodeProblem } from "../../types";
import type { LcisData } from "./algorithm";
import { lcisSteps } from "./algorithm";
import { CODE } from "./code";
import { LcisRenderer } from "./LcisRenderer";

export const longestContinuousIncreasingProblem: LeetCodeProblem<number[], LcisData, Record<string, never>> = {
  id: "longest-continuous-increasing-subsequence",
  number: 674,
  title: "Longest Continuous Increasing Subsequence",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/longest-continuous-increasing-subsequence/",
  summary: "One pass: grow the run while strictly increasing, reset otherwise, and track the longest.",
  prompt: "Given an unsorted array, return the length of the longest contiguous strictly increasing subsequence.",
  topics: ["Array"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 5, 4, 7],
  defaultOptions: {},
  buildSteps: (input) => lcisSteps(input),
  Renderer: LcisRenderer,
};
