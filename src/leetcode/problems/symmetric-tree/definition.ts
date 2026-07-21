import type { LeetCodeProblem } from "../../types";
import type { SymmetricData } from "./algorithm";
import { symmetricSteps } from "./algorithm";
import { CODE } from "./code";
import { SymmetricRenderer } from "./SymmetricRenderer";

export const symmetricTreeProblem: LeetCodeProblem<
  (number | null)[],
  SymmetricData,
  Record<string, never>
> = {
  id: "symmetric-tree",
  number: 101,
  title: "Symmetric Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/symmetric-tree/",
  summary: "Check whether a tree mirrors itself around its center.",
  prompt:
    "Given the root of a binary tree, return true if it is a mirror image of " +
    "itself (symmetric around its center). (Input shown as a heap array; null " +
    "marks a missing child.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 54.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 2, 3, 4, 4, 3],
  defaultOptions: {},
  buildSteps: (input) => symmetricSteps(input),
  Renderer: SymmetricRenderer,
};
