import type { LeetCodeProblem } from "../../types";
import type { SortArrayData } from "./algorithm";
import { sortArraySteps } from "./algorithm";
import { CODE } from "./code";
import { SortArrayRenderer } from "./SortArrayRenderer";

export const sortAnArrayProblem: LeetCodeProblem<number[], SortArrayData, Record<string, never>> = {
  id: "sort-an-array",
  number: 912,
  title: "Sort an Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sort-an-array/",
  summary: "Merge sort in O(n log n) — merge runs of doubling width in one buffer.",
  prompt:
    "Given an array of integers nums, sort it in ascending order in O(n log n) time " +
    "without using built-in sort. This visualization runs bottom-up merge sort.",
  topics: ["Array", "Divide and Conquer", "Sorting", "Merge Sort"],
  tags: ["Array", "Divide and Conquer", "Merge Sort"],
  companies: ["Bloomberg"],
  frequency: 46.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 2, 3, 1, 4, 8, 6, 7],
  defaultOptions: {},
  buildSteps: (input) => sortArraySteps(input),
  Renderer: SortArrayRenderer,
};
