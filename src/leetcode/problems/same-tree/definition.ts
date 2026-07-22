import type { LeetCodeProblem } from "../../types";
import type { SameTreeData, SameTreeInput } from "./algorithm";
import { sameTreeSteps } from "./algorithm";
import { CODE } from "./code";
import { SameTreeRenderer } from "./SameTreeRenderer";

export const sameTreeProblem: LeetCodeProblem<
  SameTreeInput,
  SameTreeData,
  Record<string, never>
> = {
  id: "same-tree",
  number: 100,
  title: "Same Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/same-tree/",
  summary: "Check whether two binary trees are identical.",
  prompt:
    "Given the roots of two binary trees p and q, return true if they are " +
    "structurally identical and every corresponding node has the same value. " +
    "(Inputs shown as heap arrays.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 52.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => ({ p: [1, 2, 3], q: [1, 2, 3] }),
  defaultOptions: {},
  buildSteps: (input) => sameTreeSteps(input),
  Renderer: SameTreeRenderer,
};
