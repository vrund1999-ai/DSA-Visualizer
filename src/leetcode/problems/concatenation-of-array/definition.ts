import type { LeetCodeProblem } from "../../types";
import type { ConcatData } from "./algorithm";
import { concatSteps } from "./algorithm";
import { CODE } from "./code";
import { ConcatRenderer } from "./ConcatRenderer";

export const concatenationOfArrayProblem: LeetCodeProblem<number[], ConcatData, Record<string, never>> = {
  id: "concatenation-of-array",
  number: 1929,
  title: "Concatenation of Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/concatenation-of-array/",
  summary: "Copy each element into slot i and slot i+n to double the array.",
  prompt:
    "Given an array nums of length n, return an array ans of length 2n where " +
    "ans[i] = nums[i] and ans[i + n] = nums[i] for 0 ≤ i < n.",
  topics: ["Array", "Simulation"],
  tags: ["Array", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 2, 1],
  defaultOptions: {},
  buildSteps: (input) => concatSteps(input),
  Renderer: ConcatRenderer,
};
