import type { LeetCodeProblem } from "../../types";
import type { VerticalTraversalData } from "./algorithm";
import { verticalTraversalSteps } from "./algorithm";
import { CODE } from "./code";
import { VerticalTraversalRenderer } from "./VerticalTraversalRenderer";

export const verticalTraversalProblem: LeetCodeProblem<
  (number | null)[],
  VerticalTraversalData,
  Record<string, never>
> = {
  id: "vertical-order-traversal-of-a-binary-tree",
  number: 987,
  title: "Vertical Order Traversal of a Binary Tree",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
  summary: "Order nodes by column, then row, then value — the value tie-break is key.",
  prompt:
    "Return the vertical order traversal of a binary tree. Nodes are grouped by column " +
    "(root = 0, left = −1, right = +1); within a column they are ordered top-to-bottom, " +
    "and nodes sharing a position are ordered by value. (Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Hash Table", "Sorting", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Hash Table", "Sorting", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 54.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 9, 20, null, null, 15, 7],
  defaultOptions: {},
  buildSteps: (input) => verticalTraversalSteps(input),
  Renderer: VerticalTraversalRenderer,
};
