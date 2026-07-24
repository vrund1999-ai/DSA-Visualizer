import type { LeetCodeProblem } from "../../types";
import type { NonOverlapData } from "./algorithm";
import { nonOverlapSteps } from "./algorithm";
import { CODE } from "./code";
import { NonOverlapRenderer } from "./NonOverlapRenderer";

export const nonOverlappingIntervalsProblem: LeetCodeProblem<[number, number][], NonOverlapData, Record<string, never>> = {
  id: "non-overlapping-intervals",
  number: 435,
  title: "Non-overlapping Intervals",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/non-overlapping-intervals/",
  summary: "Greedy by earliest end: keep compatible intervals, count the rest.",
  prompt:
    "Given a set of intervals, return the minimum number you must remove so the rest are " +
    "non-overlapping.",
  topics: ["Array", "Dynamic Programming", "Greedy", "Sorting"],
  tags: ["Array", "Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ],
  defaultOptions: {},
  buildSteps: (input) => nonOverlapSteps(input),
  Renderer: NonOverlapRenderer,
};
