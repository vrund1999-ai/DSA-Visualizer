import type { LeetCodeProblem } from "../../types";
import type { InvertData } from "./algorithm";
import { invertSteps } from "./algorithm";
import { CODE } from "./code";
import { InvertRenderer } from "./InvertRenderer";

export const invertBinaryTreeProblem: LeetCodeProblem<
  (number | null)[],
  InvertData,
  Record<string, never>
> = {
  id: "invert-binary-tree",
  number: 226,
  title: "Invert Binary Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/invert-binary-tree/",
  summary: "Mirror a tree by swapping every node's children.",
  prompt:
    "Given the root of a binary tree, invert it (swap the left and right child " +
    "of every node) and return its root. (Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 2, 7, 1, 3, 6, 9],
  defaultOptions: {},
  buildSteps: (input) => invertSteps(input),
  Renderer: InvertRenderer,
};
