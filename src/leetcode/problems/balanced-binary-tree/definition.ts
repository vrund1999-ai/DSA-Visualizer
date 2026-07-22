import type { LeetCodeProblem } from "../../types";
import type { BalancedData } from "./algorithm";
import { balancedSteps } from "./algorithm";
import { CODE } from "./code";
import { BalancedRenderer } from "./BalancedRenderer";

export const balancedBinaryTreeProblem: LeetCodeProblem<
  (number | null)[],
  BalancedData,
  Record<string, never>
> = {
  id: "balanced-binary-tree",
  number: 110,
  title: "Balanced Binary Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/balanced-binary-tree/",
  summary: "Is every node's two subtrees within height 1? (post-order DFS)",
  prompt:
    "Given a binary tree, determine if it is height-balanced — for every node, " +
    "the heights of its left and right subtrees differ by at most 1. (Input " +
    "shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 54.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 9, 20, null, null, 15, 7],
  defaultOptions: {},
  buildSteps: (input) => balancedSteps(input),
  Renderer: BalancedRenderer,
};
