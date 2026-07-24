import type { LeetCodeProblem } from "../../types";
import type { FreqSortData } from "./algorithm";
import { freqSortSteps } from "./algorithm";
import { CODE } from "./code";
import { FreqSortRenderer } from "./FreqSortRenderer";

export const sortCharsByFrequencyProblem: LeetCodeProblem<string, FreqSortData, Record<string, never>> = {
  id: "sort-characters-by-frequency",
  number: 451,
  title: "Sort Characters By Frequency",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sort-characters-by-frequency/",
  summary: "Count characters, sort by descending frequency, expand each run.",
  prompt:
    "Given a string s, sort it in decreasing order based on the frequency of the " +
    "characters and return the result. Characters with equal frequency may be in any order.",
  topics: ["Hash Table", "String", "Sorting", "Heap", "Bucket Sort", "Counting"],
  tags: ["Hash Table", "String", "Sorting", "Bucket Sort"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log k)", timeWorst: "O(n log k)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "tree",
  defaultOptions: {},
  buildSteps: (input) => freqSortSteps(input),
  Renderer: FreqSortRenderer,
};
