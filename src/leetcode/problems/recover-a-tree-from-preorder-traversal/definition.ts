import type { LeetCodeProblem } from "../../types";
import type { RecoverTreeData } from "./algorithm";
import { recoverTreeSteps } from "./algorithm";
import { CODE } from "./code";
import { RecoverTreeRenderer } from "./RecoverTreeRenderer";

interface RecoverTreeInput {
  s: string;
}

export const recoverTreeProblem: LeetCodeProblem<RecoverTreeInput, RecoverTreeData, Record<string, never>> = {
  id: "recover-a-tree-from-preorder-traversal",
  number: 1028,
  title: "Recover a Tree From Preorder Traversal",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/",
  summary: "Each token's dash count is its depth; a per-depth stack reattaches every node to the correct parent (left child first).",
  prompt:
    "Given a preorder DFS string where each node is preceded by dashes equal to its depth, reconstruct and " +
    "return the binary tree.",
  topics: ["String", "Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Tree", "DFS", "String"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "1-2--3--4-5--6--7" }),
  defaultOptions: {},
  buildSteps: (input) => recoverTreeSteps(input.s),
  Renderer: RecoverTreeRenderer,
};
