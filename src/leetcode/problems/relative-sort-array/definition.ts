import type { LeetCodeProblem } from "../../types";
import type { RelativeSortData } from "./algorithm";
import { relativeSortSteps } from "./algorithm";
import { CODE } from "./code";
import { RelativeSortRenderer } from "./RelativeSortRenderer";

interface RelativeSortInput {
  arr1: number[];
  arr2: number[];
}

export const relativeSortArrayProblem: LeetCodeProblem<RelativeSortInput, RelativeSortData, Record<string, never>> = {
  id: "relative-sort-array",
  number: 1122,
  title: "Relative Sort Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/relative-sort-array/",
  summary: "Count arr1, emit arr2's values in its order, then append everything else in ascending order.",
  prompt:
    "Sort arr1 so that elements appearing in arr2 come first in arr2's relative order; elements not in arr2 " +
    "are placed at the end in ascending order.",
  topics: ["Array", "Hash Table", "Sorting", "Counting Sort"],
  tags: ["Counting Sort", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + m + k log k)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr1: [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2: [2, 1, 4, 3, 9, 6] }),
  defaultOptions: {},
  buildSteps: (input) => relativeSortSteps(input.arr1, input.arr2),
  Renderer: RelativeSortRenderer,
};
