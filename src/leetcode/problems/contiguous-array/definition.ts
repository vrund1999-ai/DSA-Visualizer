import type { LeetCodeProblem } from "../../types";
import type { ContiguousData } from "./algorithm";
import { contiguousSteps } from "./algorithm";
import { CODE } from "./code";
import { ContiguousRenderer } from "./ContiguousRenderer";

export const contiguousArrayProblem: LeetCodeProblem<number[], ContiguousData, Record<string, never>> = {
  id: "contiguous-array",
  number: 525,
  title: "Contiguous Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/contiguous-array/",
  summary: "Map 0→−1; a repeated prefix sum bounds a subarray with equal 0s and 1s.",
  prompt:
    "Given a binary array nums, return the maximum length of a contiguous subarray with " +
    "an equal number of 0s and 1s.",
  topics: ["Array", "Hash Table", "Prefix Sum"],
  tags: ["Array", "Hash Table", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 1, 0, 0, 1, 1, 0],
  defaultOptions: {},
  buildSteps: (input) => contiguousSteps(input),
  Renderer: ContiguousRenderer,
};
