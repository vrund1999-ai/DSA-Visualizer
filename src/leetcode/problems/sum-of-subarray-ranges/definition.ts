import type { LeetCodeProblem } from "../../types";
import type { SubRangesData } from "./algorithm";
import { subRangesSteps } from "./algorithm";
import { CODE } from "./code";
import { SubRangesRenderer } from "./SubRangesRenderer";

export const sumOfSubarrayRangesProblem: LeetCodeProblem<number[], SubRangesData, Record<string, never>> = {
  id: "sum-of-subarray-ranges",
  number: 2104,
  title: "Sum of Subarray Ranges",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sum-of-subarray-ranges/",
  summary: "Grow each window from a fixed left end, updating min/max, and add every subarray's range.",
  prompt:
    "The range of a subarray is its largest element minus its smallest. Return the sum of all subarray " +
    "ranges of nums.",
  topics: ["Array", "Stack", "Monotonic Stack"],
  tags: ["Array", "Stack"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 3, 2],
  defaultOptions: {},
  buildSteps: (input) => subRangesSteps(input),
  Renderer: SubRangesRenderer,
};
