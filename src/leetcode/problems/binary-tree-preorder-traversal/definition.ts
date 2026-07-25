import type { LeetCodeProblem } from "../../types";
import type { PreorderData } from "./algorithm";
import { preorderSteps } from "./algorithm";
import { CODE } from "./code";
import { PreorderRenderer } from "./PreorderRenderer";

export const binaryTreePreorderTraversalProblem: LeetCodeProblem<(number | null)[], PreorderData, Record<string, never>> = {
  id: "binary-tree-preorder-traversal",
  number: 144,
  title: "Binary Tree Preorder Traversal",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
  summary: "Emit each node before recursing into its left then right subtree (root-left-right).",
  prompt: "Given the root of a binary tree, return the preorder traversal of its nodes' values.",
  topics: ["Stack", "Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5, null, 6],
  defaultOptions: {},
  buildSteps: (input) => preorderSteps(input),
  Renderer: PreorderRenderer,
};
