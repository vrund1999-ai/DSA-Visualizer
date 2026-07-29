import type { LeetCodeProblem } from "../../types";
import type { BstBuildData } from "./algorithm";
import { bstBuildSteps } from "./algorithm";
import { CODE } from "./code";
import { BstBuildRenderer } from "./BstBuildRenderer";

export const constructBstFromPreorderProblem: LeetCodeProblem<number[], BstBuildData, Record<string, never>> = {
  id: "construct-binary-search-tree-from-preorder-traversal",
  number: 1008,
  title: "Construct Binary Search Tree from Preorder Traversal",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
  summary: "Consume preorder left to right, splitting each subtree by an inherited upper bound.",
  prompt: "Given the preorder traversal of a binary search tree, reconstruct the tree and return its root.",
  topics: ["Array", "Stack", "Tree", "Binary Search Tree", "Binary Tree"],
  tags: ["Array", "Tree", "Binary Search Tree"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [8, 5, 1, 7, 10, 12],
  defaultOptions: {},
  buildSteps: (input) => bstBuildSteps(input),
  Renderer: BstBuildRenderer,
};
