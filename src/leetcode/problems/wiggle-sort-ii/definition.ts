import type { LeetCodeProblem } from "../../types";
import type { WiggleData } from "./algorithm";
import { wiggleSteps } from "./algorithm";
import { CODE } from "./code";
import { WiggleRenderer } from "./WiggleRenderer";

export const wiggleSortIIProblem: LeetCodeProblem<number[], WiggleData, Record<string, never>> = {
  id: "wiggle-sort-ii",
  number: 324,
  title: "Wiggle Sort II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/wiggle-sort-ii/",
  summary: "Split the sorted values into two halves and interleave them from the top down to separate duplicates.",
  prompt:
    "Reorder an integer array so that nums[0] < nums[1] > nums[2] < nums[3] … (strict alternating), " +
    "where each element differs from its neighbors.",
  topics: ["Array", "Sorting", "Divide and Conquer"],
  tags: ["Array", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 5, 1, 1, 6, 4],
  defaultOptions: {},
  buildSteps: (input) => wiggleSteps(input),
  Renderer: WiggleRenderer,
};
