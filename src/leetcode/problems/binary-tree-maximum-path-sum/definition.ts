import type { LeetCodeProblem } from "../../types";
import type { MaxPathData } from "./algorithm";
import { maxPathSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxPathRenderer } from "./MaxPathRenderer";

export const binaryTreeMaxPathSumProblem: LeetCodeProblem<
  (number | null)[],
  MaxPathData,
  Record<string, never>
> = {
  id: "binary-tree-maximum-path-sum",
  number: 124,
  title: "Binary Tree Maximum Path Sum",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
  summary: "Post-order DFS; each node peaks an arch path of node + best left/right gain.",
  prompt:
    "A path is any sequence of connected nodes. Return the maximum path sum of any path " +
    "in the binary tree (the path need not pass through the root). " +
    "(Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Dynamic Programming", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Dynamic Programming", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 44.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [-10, 9, 20, null, null, 15, 7],
  defaultOptions: {},
  buildSteps: (input) => maxPathSteps(input),
  Renderer: MaxPathRenderer,
};
