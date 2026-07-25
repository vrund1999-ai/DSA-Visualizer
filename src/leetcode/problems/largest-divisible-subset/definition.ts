import type { LeetCodeProblem } from "../../types";
import type { DivSubsetData } from "./algorithm";
import { divSubsetSteps } from "./algorithm";
import { CODE } from "./code";
import { DivSubsetRenderer } from "./DivSubsetRenderer";

export const largestDivisibleSubsetProblem: LeetCodeProblem<number[], DivSubsetData, Record<string, never>> = {
  id: "largest-divisible-subset",
  number: 368,
  title: "Largest Divisible Subset",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/largest-divisible-subset/",
  summary: "Sort, then find the longest chain where each element divides the next.",
  prompt:
    "Given a set of distinct positive integers, return the largest subset in which every " +
    "pair (a, b) satisfies a % b == 0 or b % a == 0.",
  topics: ["Array", "Math", "Dynamic Programming", "Sorting"],
  tags: ["Array", "Math", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 4, 8, 3],
  defaultOptions: {},
  buildSteps: (input) => divSubsetSteps(input),
  Renderer: DivSubsetRenderer,
};
