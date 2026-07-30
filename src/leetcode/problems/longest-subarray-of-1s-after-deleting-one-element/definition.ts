import type { LeetCodeProblem } from "../../types";
import type { LongestOnesData } from "./algorithm";
import { longestOnesSteps } from "./algorithm";
import { CODE } from "./code";
import { LongestOnesRenderer } from "./LongestOnesRenderer";

export const longestSubarrayOnesProblem: LeetCodeProblem<number[], LongestOnesData, Record<string, never>> = {
  id: "longest-subarray-of-1s-after-deleting-one-element",
  number: 1493,
  title: "Longest Subarray of 1's After Deleting One Element",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
  summary: "A window with at most one 0 (the deleted cell) tracks the longest run; its 1-count is right − left.",
  prompt:
    "You must delete exactly one element from a binary array. Return the length of the longest subarray of " +
    "1s in the resulting array.",
  topics: ["Array", "Dynamic Programming", "Sliding Window"],
  tags: ["Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 1, 1, 1, 0, 1, 1, 0, 1],
  defaultOptions: {},
  buildSteps: (input) => longestOnesSteps(input),
  Renderer: LongestOnesRenderer,
};
