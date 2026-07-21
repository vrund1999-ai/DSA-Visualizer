import type { LeetCodeProblem } from "../../types";
import type { DedupData } from "./algorithm";
import { dedupSteps } from "./algorithm";
import { CODE } from "./code";
import { DedupRenderer } from "./DedupRenderer";

export const removeDuplicatesProblem: LeetCodeProblem<
  number[],
  DedupData,
  Record<string, never>
> = {
  id: "remove-duplicates-from-sorted-array",
  number: 26,
  title: "Remove Duplicates from Sorted Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
  summary: "Keep one of each value in-place, return the new length.",
  prompt:
    "Given a sorted array `nums`, remove the duplicates in-place so each unique " +
    "element appears once, keeping their order. Return the number of unique " +
    "elements k (the first k slots must hold them).",
  topics: ["Array", "Two Pointers"],
  tags: ["Array", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 73.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 0, 1, 1, 1, 2, 2, 3, 4],
  defaultOptions: {},
  buildSteps: (input) => dedupSteps(input),
  Renderer: DedupRenderer,
};
