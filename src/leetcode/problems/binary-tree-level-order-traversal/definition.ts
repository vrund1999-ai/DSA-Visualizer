import type { LeetCodeProblem } from "../../types";
import type { LevelOrderData } from "./algorithm";
import { levelOrderSteps } from "./algorithm";
import { CODE } from "./code";
import { LevelOrderRenderer } from "./LevelOrderRenderer";

export const levelOrderProblem: LeetCodeProblem<
  (number | null)[],
  LevelOrderData,
  Record<string, never>
> = {
  id: "binary-tree-level-order-traversal",
  number: 102,
  title: "Binary Tree Level Order Traversal",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
  summary: "Return node values grouped by depth, via BFS.",
  prompt:
    "Given the root of a binary tree, return the level-order traversal of its " +
    "nodes' values (left to right, level by level). (Input shown as a heap " +
    "array; null marks a missing child.)",
  topics: ["Tree", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 58.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 9, 20, null, null, 15, 7],
  defaultOptions: {},
  buildSteps: (input) => levelOrderSteps(input),
  Renderer: LevelOrderRenderer,
};
