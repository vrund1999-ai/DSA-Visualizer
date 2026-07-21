import type { LeetCodeProblem } from "../../types";
import type { MergeData } from "./algorithm";
import { mergeIntervalsSteps } from "./algorithm";
import { CODE } from "./code";
import { MergeIntervalsRenderer } from "./MergeIntervalsRenderer";

export const mergeIntervalsProblem: LeetCodeProblem<
  [number, number][],
  MergeData,
  Record<string, never>
> = {
  id: "merge-intervals",
  number: 56,
  title: "Merge Intervals",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/merge-intervals/",
  summary: "Merge all overlapping intervals into non-overlapping ranges.",
  prompt:
    "Given an array of intervals where `intervals[i] = [start, end]`, merge all " +
    "overlapping intervals and return the non-overlapping intervals that cover " +
    "all the input.",
  topics: ["Array", "Sorting"],
  tags: ["Array", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 86.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ],
  defaultOptions: {},
  buildSteps: (input) => mergeIntervalsSteps(input),
  Renderer: MergeIntervalsRenderer,
};
