import type { LeetCodeProblem } from "../../types";
import type { FindMinData } from "./algorithm";
import { findMinSteps } from "./algorithm";
import { CODE } from "./code";
import { FindMinRenderer } from "./FindMinRenderer";

export const findMinRotatedProblem: LeetCodeProblem<
  number[],
  FindMinData,
  Record<string, never>
> = {
  id: "find-minimum-in-rotated-sorted-array",
  number: 153,
  title: "Find Minimum in Rotated Sorted Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
  summary: "Locate the rotation point in O(log n).",
  prompt:
    "A sorted array of unique values has been rotated at some pivot. Given such " +
    "an array `nums`, return its minimum element in O(log n) time.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 5, 6, 7, 0, 1, 2],
  defaultOptions: {},
  buildSteps: (input) => findMinSteps(input),
  Renderer: FindMinRenderer,
};
