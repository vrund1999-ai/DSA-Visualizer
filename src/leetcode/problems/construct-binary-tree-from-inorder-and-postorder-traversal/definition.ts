import type { LeetCodeProblem } from "../../types";
import type { BuildTreeData } from "./algorithm";
import { buildTreeSteps } from "./algorithm";
import { CODE } from "./code";
import { BuildTreeRenderer } from "./BuildTreeRenderer";

interface BuildTreeInput {
  inorder: number[];
  postorder: number[];
}

export const constructFromInorderPostorderProblem: LeetCodeProblem<BuildTreeInput, BuildTreeData, Record<string, never>> = {
  id: "construct-binary-tree-from-inorder-and-postorder-traversal",
  number: 106,
  title: "Construct Binary Tree from Inorder and Postorder Traversal",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
  summary: "Postorder's last value is the root; its inorder position splits the left and right subtrees.",
  prompt:
    "Given inorder and postorder traversals of a binary tree with unique values, reconstruct and return " +
    "the tree.",
  topics: ["Array", "Hash Table", "Divide and Conquer", "Tree"],
  tags: ["Tree", "Divide and Conquer"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ inorder: [9, 3, 15, 20, 7], postorder: [9, 15, 7, 20, 3] }),
  defaultOptions: {},
  buildSteps: (input) => buildTreeSteps(input.inorder, input.postorder),
  Renderer: BuildTreeRenderer,
};
