import type { LeetCodeProblem } from "../../types";
import type { LcaDeepestData } from "./algorithm";
import { lcaDeepestSteps } from "./algorithm";
import { CODE } from "./code";
import { LcaDeepestRenderer } from "./LcaDeepestRenderer";

interface LcaDeepestInput {
  heap: (number | null)[];
}

export const lcaDeepestLeavesProblem: LeetCodeProblem<LcaDeepestInput, LcaDeepestData, Record<string, never>> = {
  id: "lowest-common-ancestor-of-deepest-leaves",
  number: 1123,
  title: "Lowest Common Ancestor of Deepest Leaves",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/",
  summary: "Post-order DFS returns each subtree's depth and deepest-leaf LCA; equal-depth children make the node the LCA.",
  prompt:
    "Given the root of a binary tree, return the lowest common ancestor of its set of deepest leaves (the " +
    "leaves at the maximum depth).",
  topics: ["Hash Table", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "DFS"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4] }),
  defaultOptions: {},
  buildSteps: (input) => lcaDeepestSteps(input.heap),
  Renderer: LcaDeepestRenderer,
};
