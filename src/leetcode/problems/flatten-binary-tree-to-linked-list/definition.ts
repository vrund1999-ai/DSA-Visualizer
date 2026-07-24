import type { LeetCodeProblem } from "../../types";
import type { FlattenData } from "./algorithm";
import { flattenSteps } from "./algorithm";
import { CODE } from "./code";
import { FlattenRenderer } from "./FlattenRenderer";

export const flattenBinaryTreeProblem: LeetCodeProblem<
  (number | null)[],
  FlattenData,
  Record<string, never>
> = {
  id: "flatten-binary-tree-to-linked-list",
  number: 114,
  title: "Flatten Binary Tree to Linked List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
  summary: "Reverse-preorder DFS prepends each node into a right-skewed list.",
  prompt:
    "Flatten a binary tree into a 'linked list' in-place: each node's right child points " +
    "to the next node in preorder and the left child is null. " +
    "(Input shown as a heap array.)",
  topics: ["Linked List", "Stack", "Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Linked List", "Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 5, 3, 4, null, 6],
  defaultOptions: {},
  buildSteps: (input) => flattenSteps(input),
  Renderer: FlattenRenderer,
};
