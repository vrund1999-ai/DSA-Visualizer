import type { LeetCodeProblem } from "../../types";
import type { CheckRotatedData } from "./algorithm";
import { checkRotatedSteps } from "./algorithm";
import { CODE } from "./code";
import { CheckRotatedRenderer } from "./CheckRotatedRenderer";

export const checkSortedRotatedProblem: LeetCodeProblem<
  number[],
  CheckRotatedData,
  Record<string, never>
> = {
  id: "check-if-array-is-sorted-and-rotated",
  number: 1752,
  title: "Check if Array Is Sorted and Rotated",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
  summary: "At most one circular drop means sorted + rotated.",
  prompt:
    "Given an array `nums`, return true if it was originally sorted in " +
    "non-decreasing order and then rotated some number of positions (including " +
    "zero).",
  topics: ["Array"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 60.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 4, 5, 1, 2],
  defaultOptions: {},
  buildSteps: (input) => checkRotatedSteps(input),
  Renderer: CheckRotatedRenderer,
};
