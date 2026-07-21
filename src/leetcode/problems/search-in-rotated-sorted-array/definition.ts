import type { LeetCodeProblem } from "../../types";
import type { RotatedSearchData, RotatedSearchInput } from "./algorithm";
import { rotatedSearchSteps } from "./algorithm";
import { CODE } from "./code";
import { RotatedSearchRenderer } from "./RotatedSearchRenderer";

export const searchRotatedProblem: LeetCodeProblem<
  RotatedSearchInput,
  RotatedSearchData,
  Record<string, never>
> = {
  id: "search-in-rotated-sorted-array",
  number: 33,
  title: "Search in Rotated Sorted Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
  summary: "Binary search where one half is always sorted.",
  prompt:
    "Given a sorted array `nums` that has been rotated at an unknown pivot, and " +
    "a `target`, return its index or -1. Must run in O(log n).",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 71.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [4, 5, 6, 7, 0, 1, 2], target: 0 }),
  defaultOptions: {},
  buildSteps: (input) => rotatedSearchSteps(input),
  Renderer: RotatedSearchRenderer,
};
