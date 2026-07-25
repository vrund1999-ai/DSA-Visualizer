import type { LeetCodeProblem } from "../../types";
import type { InsertIntervalData } from "./algorithm";
import { insertIntervalSteps } from "./algorithm";
import { CODE } from "./code";
import { InsertIntervalRenderer } from "./InsertIntervalRenderer";

interface InsertIntervalInput {
  intervals: [number, number][];
  newInterval: [number, number];
}

export const insertIntervalProblem: LeetCodeProblem<InsertIntervalInput, InsertIntervalData, Record<string, never>> = {
  id: "insert-interval",
  number: 57,
  title: "Insert Interval",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/insert-interval/",
  summary: "Copy the intervals before, merge every overlap, then copy the rest.",
  prompt:
    "Given a sorted, non-overlapping list of intervals and a new interval, insert it and " +
    "merge as needed so the list stays sorted and non-overlapping.",
  topics: ["Array", "Intervals"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ intervals: [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval: [4, 8] }),
  defaultOptions: {},
  buildSteps: (input) => insertIntervalSteps(input.intervals, input.newInterval),
  Renderer: InsertIntervalRenderer,
};
