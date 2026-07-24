import type { LeetCodeProblem } from "../../types";
import type { RemoveDupData } from "./algorithm";
import { removeDupSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveDupRenderer } from "./RemoveDupRenderer";

export const removeDuplicatesIIProblem: LeetCodeProblem<number[], RemoveDupData, Record<string, never>> = {
  id: "remove-duplicates-from-sorted-array-ii",
  number: 80,
  title: "Remove Duplicates from Sorted Array II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
  summary: "In-place read/write pointers keep at most two of each sorted value.",
  prompt:
    "Given a sorted array, remove duplicates in place so each unique value appears at " +
    "most twice, preserving order. Return the new length k; the first k elements hold " +
    "the result.",
  topics: ["Array", "Two Pointers"],
  tags: ["Array", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 42.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 1, 1, 2, 2, 3],
  defaultOptions: {},
  buildSteps: (input) => removeDupSteps(input),
  Renderer: RemoveDupRenderer,
};
