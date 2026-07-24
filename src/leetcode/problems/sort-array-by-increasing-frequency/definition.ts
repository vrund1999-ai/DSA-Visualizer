import type { LeetCodeProblem } from "../../types";
import type { SortByFreqData } from "./algorithm";
import { sortByFreqSteps } from "./algorithm";
import { CODE } from "./code";
import { SortByFreqRenderer } from "./SortByFreqRenderer";

export const sortArrayByFrequencyProblem: LeetCodeProblem<number[], SortByFreqData, Record<string, never>> = {
  id: "sort-array-by-increasing-frequency",
  number: 1636,
  title: "Sort Array by Increasing Frequency",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/sort-array-by-increasing-frequency/",
  summary: "Count values, then sort by ascending frequency, ties by larger value.",
  prompt:
    "Sort the array in increasing order based on the frequency of the values. Values with " +
    "equal frequency are sorted in decreasing order.",
  topics: ["Array", "Hash Table", "Sorting"],
  tags: ["Array", "Hash Table", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 1, 2, 2, 2, 3],
  defaultOptions: {},
  buildSteps: (input) => sortByFreqSteps(input),
  Renderer: SortByFreqRenderer,
};
