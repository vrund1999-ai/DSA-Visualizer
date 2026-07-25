import type { LeetCodeProblem } from "../../types";
import type { ArrayPartitionData } from "./algorithm";
import { arrayPartitionSteps } from "./algorithm";
import { CODE } from "./code";
import { ArrayPartitionRenderer } from "./ArrayPartitionRenderer";

export const arrayPartitionProblem: LeetCodeProblem<number[], ArrayPartitionData, Record<string, never>> = {
  id: "array-partition",
  number: 561,
  title: "Array Partition",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/array-partition/",
  summary: "Sort, then sum every other element — the smaller of each adjacent pair.",
  prompt:
    "Given 2n integers, group them into n pairs so that the sum of min(pair) over all pairs is " +
    "maximized, and return that maximum sum.",
  topics: ["Array", "Greedy", "Sorting", "Counting Sort"],
  tags: ["Array", "Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [6, 2, 6, 5, 1, 2],
  defaultOptions: {},
  buildSteps: (input) => arrayPartitionSteps(input),
  Renderer: ArrayPartitionRenderer,
};
