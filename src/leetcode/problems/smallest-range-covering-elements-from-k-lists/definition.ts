import type { LeetCodeProblem } from "../../types";
import type { RangeData } from "./algorithm";
import { rangeSteps } from "./algorithm";
import { CODE } from "./code";
import { RangeRenderer } from "./RangeRenderer";

export const smallestRangeKListsProblem: LeetCodeProblem<number[][], RangeData, Record<string, never>> = {
  id: "smallest-range-covering-elements-from-k-lists",
  number: 632,
  title: "Smallest Range Covering Elements from K Lists",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
  summary: "Advance the pointer at the current minimum across k sorted lists, shrinking the covering window.",
  prompt:
    "Given k sorted integer lists, find the smallest range [a, b] that includes at least one number " +
    "from each of the lists.",
  topics: ["Heap", "Greedy", "Sliding Window", "Merge"],
  tags: ["Heap", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(N log k)", timeWorst: "O(N log k)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
  ],
  defaultOptions: {},
  buildSteps: (input) => rangeSteps(input),
  Renderer: RangeRenderer,
};
