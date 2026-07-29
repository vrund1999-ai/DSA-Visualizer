import type { LeetCodeProblem } from "../../types";
import type { BottomLeftData } from "./algorithm";
import { bottomLeftSteps } from "./algorithm";
import { CODE } from "./code";
import { BottomLeftRenderer } from "./BottomLeftRenderer";

export const findBottomLeftValueProblem: LeetCodeProblem<(number | null)[], BottomLeftData, Record<string, never>> = {
  id: "find-bottom-left-tree-value",
  number: 513,
  title: "Find Bottom Left Tree Value",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-bottom-left-tree-value/",
  summary: "Level-order BFS; the first node of the deepest level is the bottom-left value.",
  prompt: "Given the root of a binary tree, return the leftmost value in the last (deepest) row of the tree.",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, null, 5, 6, null, null, null, null, 7],
  defaultOptions: {},
  buildSteps: (input) => bottomLeftSteps(input),
  Renderer: BottomLeftRenderer,
};
