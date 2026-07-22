import type { LeetCodeProblem } from "../../types";
import type { SortColorsData } from "./algorithm";
import { sortColorsSteps } from "./algorithm";
import { CODE } from "./code";
import { SortColorsRenderer } from "./SortColorsRenderer";

export const sortColorsProblem: LeetCodeProblem<
  number[],
  SortColorsData,
  Record<string, never>
> = {
  id: "sort-colors",
  number: 75,
  title: "Sort Colors",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sort-colors/",
  summary: "Sort 0s, 1s, 2s in one pass (Dutch national flag).",
  prompt:
    "Given an array `nums` with values 0, 1, and 2 (red, white, blue), sort it " +
    "in-place so equal colors are adjacent and ordered 0 → 1 → 2, without a " +
    "library sort and in a single pass.",
  topics: ["Array", "Two Pointers", "Sorting"],
  tags: ["Array", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 61.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 0, 2, 1, 1, 0],
  defaultOptions: {},
  buildSteps: (input) => sortColorsSteps(input),
  Renderer: SortColorsRenderer,
};
