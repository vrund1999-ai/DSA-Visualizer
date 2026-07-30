import type { LeetCodeProblem } from "../../types";
import type { SortedBstData } from "./algorithm";
import { sortedBstSteps } from "./algorithm";
import { CODE } from "./code";
import { SortedBstRenderer } from "./SortedBstRenderer";

interface SortedBstInput {
  values: number[];
}

export const sortedListToBstProblem: LeetCodeProblem<SortedBstInput, SortedBstData, Record<string, never>> = {
  id: "convert-sorted-list-to-binary-search-tree",
  number: 109,
  title: "Convert Sorted List to Binary Search Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
  summary: "The middle value becomes each subtree's root, recursively, yielding a height-balanced BST.",
  prompt:
    "Given the values of a sorted linked list, build a height-balanced binary search tree (the depths of the " +
    "two subtrees of every node differ by at most one).",
  topics: ["Linked List", "Divide and Conquer", "Tree", "Binary Search Tree"],
  tags: ["Divide and Conquer", "Tree"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [-10, -3, 0, 5, 9] }),
  defaultOptions: {},
  buildSteps: (input) => sortedBstSteps(input.values),
  Renderer: SortedBstRenderer,
};
