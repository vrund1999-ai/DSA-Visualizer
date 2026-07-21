import type { LeetCodeProblem } from "../../types";
import type { MaxDepthData } from "./algorithm";
import { maxDepthSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxDepthRenderer } from "./MaxDepthRenderer";

export const maximumDepthProblem: LeetCodeProblem<
  (number | null)[],
  MaxDepthData,
  Record<string, never>
> = {
  id: "maximum-depth-of-binary-tree",
  number: 104,
  title: "Maximum Depth of Binary Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
  summary: "Height of a binary tree via depth-first search.",
  prompt:
    "Given the root of a binary tree, return its maximum depth — the number of " +
    "nodes along the longest path from the root down to a leaf. (Input shown as " +
    "a heap array; null marks a missing child.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 45.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 9, 20, null, null, 15, 7],
  defaultOptions: {},
  buildSteps: (input) => maxDepthSteps(input),
  Renderer: MaxDepthRenderer,
};
