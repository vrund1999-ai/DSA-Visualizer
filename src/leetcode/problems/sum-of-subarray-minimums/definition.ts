import type { LeetCodeProblem } from "../../types";
import type { SubarrayMinsData } from "./algorithm";
import { subarrayMinsSteps } from "./algorithm";
import { CODE } from "./code";
import { SubarrayMinsRenderer } from "./SubarrayMinsRenderer";

export const sumOfSubarrayMinimumsProblem: LeetCodeProblem<number[], SubarrayMinsData, Record<string, never>> = {
  id: "sum-of-subarray-minimums",
  number: 907,
  title: "Sum of Subarray Minimums",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sum-of-subarray-minimums/",
  summary: "Monotonic stack sums each element's span as a subarray minimum.",
  prompt:
    "Given an array of integers arr, return the sum of min(b) over every contiguous " +
    "subarray b of arr, modulo 1e9 + 7.",
  topics: ["Array", "Dynamic Programming", "Stack", "Monotonic Stack"],
  tags: ["Array", "Stack", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 1, 2, 4],
  defaultOptions: {},
  buildSteps: (input) => subarrayMinsSteps(input),
  Renderer: SubarrayMinsRenderer,
};
