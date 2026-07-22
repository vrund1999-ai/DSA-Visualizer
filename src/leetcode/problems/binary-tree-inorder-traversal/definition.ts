import type { LeetCodeProblem } from "../../types";
import type { InorderData } from "./algorithm";
import { inorderSteps } from "./algorithm";
import { CODE } from "./code";
import { InorderRenderer } from "./InorderRenderer";

export const inorderTraversalProblem: LeetCodeProblem<
  (number | null)[],
  InorderData,
  Record<string, never>
> = {
  id: "binary-tree-inorder-traversal",
  number: 94,
  title: "Binary Tree Inorder Traversal",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
  summary: "Iterative left → node → right traversal with a stack.",
  prompt:
    "Given the root of a binary tree, return the in-order traversal of its " +
    "nodes' values. (Input shown as a heap array.)",
  topics: ["Stack", "Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Stack", "Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [1, null, 2, null, null, 3],
  defaultOptions: {},
  buildSteps: (input) => inorderSteps(input),
  Renderer: InorderRenderer,
};
