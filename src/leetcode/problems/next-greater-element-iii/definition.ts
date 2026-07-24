import type { LeetCodeProblem } from "../../types";
import type { NextGreaterIIIData } from "./algorithm";
import { nextGreaterIIISteps } from "./algorithm";
import { CODE } from "./code";
import { NextGreaterIIIRenderer } from "./NextGreaterIIIRenderer";

export const nextGreaterElementIIIProblem: LeetCodeProblem<number, NextGreaterIIIData, Record<string, never>> = {
  id: "next-greater-element-iii",
  number: 556,
  title: "Next Greater Element III",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/next-greater-element-iii/",
  summary: "Next-permutation on the decimal digits: pivot, swap, reverse suffix.",
  prompt:
    "Given a positive integer n, return the smallest integer that uses exactly the same " +
    "digits and is greater than n. If none exists or it exceeds a 32-bit int, return -1.",
  topics: ["Math", "Two Pointers", "String"],
  tags: ["Math", "Two Pointers", "String"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(d)", timeWorst: "O(d)", space: "O(d)" },
  inputSchema: [],
  makeDefaultInput: () => 12443322,
  defaultOptions: {},
  buildSteps: (input) => nextGreaterIIISteps(input),
  Renderer: NextGreaterIIIRenderer,
};
