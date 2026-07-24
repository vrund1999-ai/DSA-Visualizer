import type { LeetCodeProblem } from "../../types";
import type { RearrangeData } from "./algorithm";
import { rearrangeSteps } from "./algorithm";
import { CODE } from "./code";
import { RearrangeRenderer } from "./RearrangeRenderer";

export const rearrangeArrayBySignProblem: LeetCodeProblem<number[], RearrangeData, Record<string, never>> = {
  id: "rearrange-array-elements-by-sign",
  number: 2149,
  title: "Rearrange Array Elements by Sign",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
  summary: "Two write cursors place positives at even indices, negatives at odd.",
  prompt:
    "Given an array with equal numbers of positive and negative integers, rearrange it " +
    "so signs alternate (starting positive) while preserving the relative order within " +
    "each sign.",
  topics: ["Array", "Two Pointers", "Simulation"],
  tags: ["Array", "Two Pointers", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 1, -2, -5, 2, -4],
  defaultOptions: {},
  buildSteps: (input) => rearrangeSteps(input),
  Renderer: RearrangeRenderer,
};
