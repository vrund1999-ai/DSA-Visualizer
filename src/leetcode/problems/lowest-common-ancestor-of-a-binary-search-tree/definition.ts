import type { LeetCodeProblem } from "../../types";
import type { LCAData, LCAInput } from "./algorithm";
import { lcaSteps } from "./algorithm";
import { CODE } from "./code";
import { LCARenderer } from "./LCARenderer";

export const lcaBSTProblem: LeetCodeProblem<
  LCAInput,
  LCAData,
  Record<string, never>
> = {
  id: "lowest-common-ancestor-of-a-binary-search-tree",
  number: 235,
  title: "Lowest Common Ancestor of a Binary Search Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
  summary: "Find the split point of two nodes in a BST.",
  prompt:
    "Given a BST and two node values p and q, return the value of their lowest " +
    "common ancestor — the deepest node that has both as descendants. (Input " +
    "shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 47.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(h)", timeWorst: "O(h)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [6, 2, 8, 0, 4, 7, 9], p: 2, q: 4 }),
  defaultOptions: {},
  buildSteps: (input) => lcaSteps(input),
  Renderer: LCARenderer,
};
