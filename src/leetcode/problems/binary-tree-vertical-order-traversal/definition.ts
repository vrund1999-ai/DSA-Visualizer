import type { LeetCodeProblem } from "../../types";
import type { VerticalOrderData } from "./algorithm";
import { verticalOrderSteps } from "./algorithm";
import { CODE } from "./code";
import { VerticalOrderRenderer } from "./VerticalOrderRenderer";

export const verticalOrderProblem: LeetCodeProblem<
  (number | null)[],
  VerticalOrderData,
  Record<string, never>
> = {
  id: "binary-tree-vertical-order-traversal",
  number: 314,
  title: "Binary Tree Vertical Order Traversal",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/binary-tree-vertical-order-traversal/",
  summary: "BFS carrying a column index; group node values by column.",
  prompt:
    "Given the root of a binary tree, return the vertical order traversal of its " +
    "nodes' values (top to bottom, column by column, left to right). " +
    "(Input shown as a heap array.)",
  topics: ["Tree", "Breadth-First Search", "Hash Table", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Hash Table", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 48.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 9, 20, null, null, 15, 7],
  defaultOptions: {},
  buildSteps: (input) => verticalOrderSteps(input),
  Renderer: VerticalOrderRenderer,
};
