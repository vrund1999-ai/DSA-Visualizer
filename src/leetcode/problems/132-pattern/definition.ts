import type { LeetCodeProblem } from "../../types";
import type { Pattern132Data } from "./algorithm";
import { pattern132Steps } from "./algorithm";
import { CODE } from "./code";
import { Pattern132Renderer } from "./Pattern132Renderer";

export const pattern132Problem: LeetCodeProblem<number[], Pattern132Data, Record<string, never>> = {
  id: "132-pattern",
  number: 456,
  title: "132 Pattern",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/132-pattern/",
  summary: "Right-to-left monotonic stack tracking the best '2' with a larger '3' after it.",
  prompt:
    "Given an array nums, return true if there is a 132 pattern: indices i < j < k with " +
    "nums[i] < nums[k] < nums[j].",
  topics: ["Array", "Binary Search", "Stack", "Monotonic Stack", "Ordered Set"],
  tags: ["Array", "Stack", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 1, 4, 2],
  defaultOptions: {},
  buildSteps: (input) => pattern132Steps(input),
  Renderer: Pattern132Renderer,
};
