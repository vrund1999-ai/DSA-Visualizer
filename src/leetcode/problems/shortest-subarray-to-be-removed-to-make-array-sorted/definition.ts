import type { LeetCodeProblem } from "../../types";
import type { ShortestRemovalData } from "./algorithm";
import { shortestRemovalSteps } from "./algorithm";
import { CODE } from "./code";
import { ShortestRemovalRenderer } from "./ShortestRemovalRenderer";

export const shortestSubarrayRemovalProblem: LeetCodeProblem<number[], ShortestRemovalData, Record<string, never>> = {
  id: "shortest-subarray-to-be-removed-to-make-array-sorted",
  number: 1574,
  title: "Shortest Subarray to be Removed to Make Array Sorted",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/",
  summary: "Keep the longest sorted prefix and suffix, then bridge them with two pointers.",
  prompt:
    "Given an integer array, remove one contiguous subarray so that the remaining elements are " +
    "non-decreasing. Return the length of the shortest such subarray.",
  topics: ["Two Pointers", "Stack", "Binary Search"],
  tags: ["Two Pointers", "Array"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 10, 4, 2, 3, 5],
  defaultOptions: {},
  buildSteps: (input) => shortestRemovalSteps(input),
  Renderer: ShortestRemovalRenderer,
};
