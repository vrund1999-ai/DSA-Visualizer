import type { LeetCodeProblem } from "../../types";
import type { PostorderData } from "./algorithm";
import { postorderSteps } from "./algorithm";
import { CODE } from "./code";
import { PostorderRenderer } from "./PostorderRenderer";

export const binaryTreePostorderTraversalProblem: LeetCodeProblem<(number | null)[], PostorderData, Record<string, never>> = {
  id: "binary-tree-postorder-traversal",
  number: 145,
  title: "Binary Tree Postorder Traversal",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
  summary: "Recurse left, recurse right, then emit the node (left-right-root order).",
  prompt: "Given the root of a binary tree, return the postorder traversal of its nodes' values.",
  topics: ["Stack", "Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5, null, 6],
  defaultOptions: {},
  buildSteps: (input) => postorderSteps(input),
  Renderer: PostorderRenderer,
};
