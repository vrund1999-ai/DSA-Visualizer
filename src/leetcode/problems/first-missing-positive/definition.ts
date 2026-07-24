import type { LeetCodeProblem } from "../../types";
import type { FirstMissingData } from "./algorithm";
import { firstMissingSteps } from "./algorithm";
import { CODE } from "./code";
import { FirstMissingRenderer } from "./FirstMissingRenderer";

export const firstMissingPositiveProblem: LeetCodeProblem<number[], FirstMissingData, Record<string, never>> = {
  id: "first-missing-positive",
  number: 41,
  title: "First Missing Positive",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/first-missing-positive/",
  summary: "Use the array itself as a hash: swap each value to its index home, then scan.",
  prompt:
    "Given an unsorted integer array nums, return the smallest missing positive integer, " +
    "using O(n) time and O(1) extra space.",
  topics: ["Array", "Hash Table"],
  tags: ["Array", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 4, -1, 1],
  defaultOptions: {},
  buildSteps: (input) => firstMissingSteps(input),
  Renderer: FirstMissingRenderer,
};
