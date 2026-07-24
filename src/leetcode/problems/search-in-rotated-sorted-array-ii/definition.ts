import type { LeetCodeProblem } from "../../types";
import type { RotatedSearchData } from "./algorithm";
import { rotatedSearchSteps } from "./algorithm";
import { CODE } from "./code";
import { RotatedSearchRenderer } from "./RotatedSearchRenderer";

interface RotatedSearchInput {
  nums: number[];
  target: number;
}

export const searchRotatedIIProblem: LeetCodeProblem<RotatedSearchInput, RotatedSearchData, Record<string, never>> = {
  id: "search-in-rotated-sorted-array-ii",
  number: 81,
  title: "Search in Rotated Sorted Array II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
  summary: "Binary search on a rotated array with duplicates; trim ambiguous ends.",
  prompt:
    "A sorted array (with possible duplicates) is rotated at an unknown pivot. Return " +
    "whether target exists. Duplicates can make one comparison ambiguous, degrading the " +
    "worst case to O(n).",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 44.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [2, 5, 6, 0, 0, 1, 2], target: 0 }),
  defaultOptions: {},
  buildSteps: (input) => rotatedSearchSteps(input.nums, input.target),
  Renderer: RotatedSearchRenderer,
};
