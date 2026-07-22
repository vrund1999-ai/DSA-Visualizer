import type { LeetCodeProblem } from "../../types";
import type { KthSmallestData, KthSmallestInput } from "./algorithm";
import { kthSmallestSteps } from "./algorithm";
import { CODE } from "./code";
import { KthSmallestRenderer } from "./KthSmallestRenderer";

export const kthSmallestBSTProblem: LeetCodeProblem<
  KthSmallestInput,
  KthSmallestData,
  Record<string, never>
> = {
  id: "kth-smallest-element-in-a-bst",
  number: 230,
  title: "Kth Smallest Element in a BST",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
  summary: "Kth smallest value via in-order traversal.",
  prompt:
    "Given the root of a binary search tree and an integer k, return the kth " +
    "smallest value (1-indexed) among all node values. (Input shown as a heap " +
    "array.)",
  topics: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 50.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(h + k)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [5, 3, 8, 2, 4, 7, 9], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => kthSmallestSteps(input),
  Renderer: KthSmallestRenderer,
};
