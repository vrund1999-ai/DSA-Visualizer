import type { LeetCodeProblem } from "../../types";
import type { ZigzagLevelData } from "./algorithm";
import { zigzagLevelSteps } from "./algorithm";
import { CODE } from "./code";
import { ZigzagLevelRenderer } from "./ZigzagLevelRenderer";

export const zigzagLevelOrderProblem: LeetCodeProblem<
  (number | null)[],
  ZigzagLevelData,
  Record<string, never>
> = {
  id: "binary-tree-zigzag-level-order-traversal",
  number: 103,
  title: "Binary Tree Zigzag Level Order Traversal",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
  summary: "BFS with alternating left-right / right-left per level.",
  prompt:
    "Given the root of a binary tree, return the zigzag level-order traversal: " +
    "left-to-right on the first level, right-to-left on the next, and so on. " +
    "(Input shown as a heap array.)",
  topics: ["Tree", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 50.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 9, 20, null, null, 15, 7],
  defaultOptions: {},
  buildSteps: (input) => zigzagLevelSteps(input),
  Renderer: ZigzagLevelRenderer,
};
