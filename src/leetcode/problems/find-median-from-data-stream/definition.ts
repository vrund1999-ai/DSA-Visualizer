import type { LeetCodeProblem } from "../../types";
import type { MedianData } from "./algorithm";
import { medianSteps } from "./algorithm";
import { CODE } from "./code";
import { MedianRenderer } from "./MedianRenderer";

export const findMedianDataStreamProblem: LeetCodeProblem<number[], MedianData, Record<string, never>> = {
  id: "find-median-from-data-stream",
  number: 295,
  title: "Find Median from Data Stream",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/find-median-from-data-stream/",
  summary: "Balance a max-heap (low half) and min-heap (high half); tops give the median.",
  prompt:
    "Design a structure that supports addNum(x) and findMedian() over a growing stream " +
    "of integers. The median is the middle value (or the mean of the two middle values).",
  topics: ["Two Pointers", "Design", "Sorting", "Heap", "Data Stream"],
  tags: ["Design", "Heap", "Data Stream"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n) add", timeWorst: "O(log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 2, 8, 1, 9, 4],
  defaultOptions: {},
  buildSteps: (input) => medianSteps(input),
  Renderer: MedianRenderer,
};
