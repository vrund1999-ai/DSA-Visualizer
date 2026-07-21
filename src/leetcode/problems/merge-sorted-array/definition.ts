import type { LeetCodeProblem } from "../../types";
import type { MergeSortedData, MergeSortedInput } from "./algorithm";
import { mergeSortedSteps } from "./algorithm";
import { CODE } from "./code";
import { MergeSortedRenderer } from "./MergeSortedRenderer";

export const mergeSortedArrayProblem: LeetCodeProblem<
  MergeSortedInput,
  MergeSortedData,
  Record<string, never>
> = {
  id: "merge-sorted-array",
  number: 88,
  title: "Merge Sorted Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/merge-sorted-array/",
  summary: "Merge nums2 into nums1 in-place from the back.",
  prompt:
    "You are given two sorted arrays `nums1` (with m real values plus n empty " +
    "slots) and `nums2` (n values). Merge nums2 into nums1 so nums1 is sorted, " +
    "in-place.",
  topics: ["Array", "Two Pointers", "Sorting"],
  tags: ["Array", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 75.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m + n)", timeWorst: "O(m + n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 }),
  defaultOptions: {},
  buildSteps: (input) => mergeSortedSteps(input),
  Renderer: MergeSortedRenderer,
};
