import type { LeetCodeProblem } from "../../types";
import type { TreePathsData } from "./algorithm";
import { treePathsSteps } from "./algorithm";
import { CODE } from "./code";
import { TreePathsRenderer } from "./TreePathsRenderer";

export const binaryTreePathsProblem: LeetCodeProblem<(number | null)[], TreePathsData, Record<string, never>> = {
  id: "binary-tree-paths",
  number: 257,
  title: "Binary Tree Paths",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/binary-tree-paths/",
  summary: "DFS carries the value path from the root and records it whenever a leaf is reached.",
  prompt: "Given the root of a binary tree, return all root-to-leaf paths in any order (formatted as 'a->b->c').",
  topics: ["Tree", "DFS", "String", "Backtracking"],
  tags: ["Tree", "DFS"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, null, 5],
  defaultOptions: {},
  buildSteps: (input) => treePathsSteps(input),
  Renderer: TreePathsRenderer,
};
