import type { LeetCodeProblem } from "../../types";
import type { SortListData } from "./algorithm";
import { sortListSteps } from "./algorithm";
import { CODE } from "./code";
import { SortListRenderer } from "./SortListRenderer";

export const sortListProblem: LeetCodeProblem<number[], SortListData, Record<string, never>> = {
  id: "sort-list",
  number: 148,
  title: "Sort List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sort-list/",
  summary: "Merge sort a linked list in O(n log n) time and O(1) extra space.",
  prompt:
    "Sort a linked list in ascending order and return its head. Aim for O(n log n) time; " +
    "merge sort is the natural fit. This visualization runs bottom-up merges.",
  topics: ["Linked List", "Two Pointers", "Divide and Conquer", "Sorting", "Merge Sort"],
  tags: ["Linked List", "Divide and Conquer", "Merge Sort"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 2, 1, 3, 5, 0],
  defaultOptions: {},
  buildSteps: (input) => sortListSteps(input),
  Renderer: SortListRenderer,
};
