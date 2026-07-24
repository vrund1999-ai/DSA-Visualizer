import type { LeetCodeProblem } from "../../types";
import type { LCAData } from "./algorithm";
import { lcaSteps } from "./algorithm";
import { CODE } from "./code";
import { LCARenderer } from "./LCARenderer";

interface LCAInput {
  heap: (number | null)[];
  p: number;
  q: number;
}

export const lcaBinaryTreeProblem: LeetCodeProblem<LCAInput, LCAData, Record<string, never>> = {
  id: "lowest-common-ancestor-of-a-binary-tree",
  number: 236,
  title: "Lowest Common Ancestor of a Binary Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
  summary: "Post-order DFS; the split point where both targets appear is the LCA.",
  prompt:
    "Given a binary tree and two node values p and q, return their lowest common " +
    "ancestor — the deepest node that has both p and q as descendants. " +
    "(Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 48.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [3, 5, 1, 6, 2, 0, 8], p: 6, q: 2 }),
  defaultOptions: {},
  buildSteps: (input) => lcaSteps(input.heap, input.p, input.q),
  Renderer: LCARenderer,
};
