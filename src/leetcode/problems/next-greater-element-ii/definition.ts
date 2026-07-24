import type { LeetCodeProblem } from "../../types";
import type { NextGreaterData } from "./algorithm";
import { nextGreaterSteps } from "./algorithm";
import { CODE } from "./code";
import { NextGreaterRenderer } from "./NextGreaterRenderer";

export const nextGreaterElementIIProblem: LeetCodeProblem<number[], NextGreaterData, Record<string, never>> = {
  id: "next-greater-element-ii",
  number: 503,
  title: "Next Greater Element II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/next-greater-element-ii/",
  summary: "Monotonic decreasing stack over a circular array (two passes).",
  prompt:
    "Given a circular integer array nums, return the next greater number for every " +
    "element. The next greater number of x is the first greater number to its " +
    "traversing-order next, searching circularly. If none exists, output -1.",
  topics: ["Array", "Stack", "Monotonic Stack"],
  tags: ["Array", "Stack", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 49.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 3],
  defaultOptions: {},
  buildSteps: (input) => nextGreaterSteps(input),
  Renderer: NextGreaterRenderer,
};
