import type { LeetCodeProblem } from "../../types";
import type { NextGreaterData, NextGreaterInput } from "./algorithm";
import { nextGreaterSteps } from "./algorithm";
import { CODE } from "./code";
import { NextGreaterRenderer } from "./NextGreaterRenderer";

export const nextGreaterElementProblem: LeetCodeProblem<
  NextGreaterInput,
  NextGreaterData,
  Record<string, never>
> = {
  id: "next-greater-element-i",
  number: 496,
  title: "Next Greater Element I",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/next-greater-element-i/",
  summary: "Next greater value for each query, via a monotonic stack.",
  prompt:
    "For each value in `nums1` (a subset of `nums2`), find the first greater " +
    "element to its right in nums2, or -1. Return the answers in nums1's order.",
  topics: ["Array", "Hash Table", "Stack", "Monotonic Stack"],
  tags: ["Array", "Hash Table", "Stack", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 56.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + m)", timeWorst: "O(n + m)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums1: [4, 1, 2], nums2: [1, 3, 4, 2] }),
  defaultOptions: {},
  buildSteps: (input) => nextGreaterSteps(input),
  Renderer: NextGreaterRenderer,
};
