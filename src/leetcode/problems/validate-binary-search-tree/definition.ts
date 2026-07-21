import type { LeetCodeProblem } from "../../types";
import type { BSTData } from "./algorithm";
import { bstSteps } from "./algorithm";
import { CODE } from "./code";
import { BSTRenderer } from "./BSTRenderer";

export const validateBSTProblem: LeetCodeProblem<
  (number | null)[],
  BSTData,
  Record<string, never>
> = {
  id: "validate-binary-search-tree",
  number: 98,
  title: "Validate Binary Search Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/validate-binary-search-tree/",
  summary: "Check BST validity by propagating (low, high) bounds.",
  prompt:
    "Given the root of a binary tree, determine if it is a valid binary search " +
    "tree: every node's left subtree holds only smaller values, its right " +
    "subtree only larger, and both subtrees are themselves BSTs. (Input shown " +
    "as a heap array; null marks a missing child.)",
  topics: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 65.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 3, 8, 2, 4, 7, 9],
  defaultOptions: {},
  buildSteps: (input) => bstSteps(input),
  Renderer: BSTRenderer,
};
