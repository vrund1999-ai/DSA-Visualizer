import type { LeetCodeProblem } from "../../types";
import type { BuildTreeData, BuildTreeInput } from "./algorithm";
import { buildTreeSteps } from "./algorithm";
import { CODE } from "./code";
import { BuildTreeRenderer } from "./BuildTreeRenderer";

export const constructTreeProblem: LeetCodeProblem<
  BuildTreeInput,
  BuildTreeData,
  Record<string, never>
> = {
  id: "construct-binary-tree-from-preorder-and-inorder-traversal",
  number: 105,
  title: "Construct Binary Tree from Preorder and Inorder Traversal",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
  summary: "Rebuild a tree: preorder roots + inorder splits.",
  prompt:
    "Given the preorder and inorder traversals of a binary tree with unique " +
    "values, reconstruct and return the tree.",
  topics: ["Array", "Hash Table", "Divide and Conquer", "Tree", "Binary Tree"],
  tags: ["Array", "Hash Table", "Divide and Conquer", "Tree", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 52.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ preorder: [3, 9, 20, 15, 7], inorder: [9, 3, 15, 20, 7] }),
  defaultOptions: {},
  buildSteps: (input) => buildTreeSteps(input),
  Renderer: BuildTreeRenderer,
};
