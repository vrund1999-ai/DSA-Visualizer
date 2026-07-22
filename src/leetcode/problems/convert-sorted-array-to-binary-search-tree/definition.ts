import type { LeetCodeProblem } from "../../types";
import type { SortedBSTData } from "./algorithm";
import { sortedBSTSteps } from "./algorithm";
import { CODE } from "./code";
import { SortedBSTRenderer } from "./SortedBSTRenderer";

export const convertSortedArrayBSTProblem: LeetCodeProblem<
  number[],
  SortedBSTData,
  Record<string, never>
> = {
  id: "convert-sorted-array-to-binary-search-tree",
  number: 108,
  title: "Convert Sorted Array to Binary Search Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
  summary: "Build a height-balanced BST by always picking the middle.",
  prompt:
    "Given a sorted integer array `nums`, build a height-balanced binary search " +
    "tree (every node's subtrees differ in height by at most one).",
  topics: ["Array", "Divide and Conquer", "Tree", "Binary Search Tree"],
  tags: ["Array", "Divide and Conquer", "Tree", "Binary Search Tree"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [-10, -3, 0, 5, 9, 12, 15],
  defaultOptions: {},
  buildSteps: (input) => sortedBSTSteps(input),
  Renderer: SortedBSTRenderer,
};
