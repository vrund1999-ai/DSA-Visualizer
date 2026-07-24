import type { LeetCodeProblem } from "../../types";
import type { MinAbsDiffData } from "./algorithm";
import { minAbsDiffSteps } from "./algorithm";
import { CODE } from "./code";
import { MinAbsDiffRenderer } from "./MinAbsDiffRenderer";

export const minimumAbsDifferenceProblem: LeetCodeProblem<number[], MinAbsDiffData, Record<string, never>> = {
  id: "minimum-absolute-difference",
  number: 1200,
  title: "Minimum Absolute Difference",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/minimum-absolute-difference/",
  summary: "Sort, then the min difference lies between adjacent elements.",
  prompt:
    "Given an array of distinct integers, find all pairs with the minimum absolute " +
    "difference between any two elements, sorted ascending by the pair's first value.",
  topics: ["Array", "Sorting"],
  tags: ["Array", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 2, 1, 3],
  defaultOptions: {},
  buildSteps: (input) => minAbsDiffSteps(input),
  Renderer: MinAbsDiffRenderer,
};
