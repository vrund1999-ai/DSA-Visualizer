import type { LeetCodeProblem } from "../../types";
import type { CreateTreeData } from "./algorithm";
import { createTreeSteps } from "./algorithm";
import { CODE } from "./code";
import { CreateTreeRenderer } from "./CreateTreeRenderer";

export const createBinaryTreeProblem: LeetCodeProblem<number[][], CreateTreeData, Record<string, never>> = {
  id: "create-binary-tree-from-descriptions",
  number: 2196,
  title: "Create Binary Tree From Descriptions",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/create-binary-tree-from-descriptions/",
  summary: "Wire up parent→child links; the value never appearing as a child is the root of the assembled tree.",
  prompt:
    "Given descriptions [parent, child, isLeft], build the binary tree and return its root (the node that " +
    "is never listed as a child).",
  topics: ["Array", "Hash Table", "Tree", "Binary Tree"],
  tags: ["Tree", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [20, 15, 1],
    [20, 17, 0],
    [50, 20, 1],
    [50, 80, 0],
    [80, 19, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => createTreeSteps(input),
  Renderer: CreateTreeRenderer,
};
