import type { LeetCodeProblem } from "../../types";
import type { TreeRowData } from "./algorithm";
import { treeRowSteps } from "./algorithm";
import { CODE } from "./code";
import { TreeRowRenderer } from "./TreeRowRenderer";

export const findLargestValueInTreeRowProblem: LeetCodeProblem<(number | null)[], TreeRowData, Record<string, never>> = {
  id: "find-largest-value-in-each-tree-row",
  number: 515,
  title: "Find Largest Value in Each Tree Row",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/",
  summary: "Level-order traversal, tracking the maximum node value at each depth.",
  prompt: "Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).",
  topics: ["Tree", "BFS", "Binary Tree"],
  tags: ["Tree", "BFS"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 2, 5, 3, null, 9],
  defaultOptions: {},
  buildSteps: (input) => treeRowSteps(input),
  Renderer: TreeRowRenderer,
};
