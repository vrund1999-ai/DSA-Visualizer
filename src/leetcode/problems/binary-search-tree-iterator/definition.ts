import type { LeetCodeProblem } from "../../types";
import type { BstIterData } from "./algorithm";
import { bstIterSteps } from "./algorithm";
import { CODE } from "./code";
import { BstIterRenderer } from "./BstIterRenderer";

export const binarySearchTreeIteratorProblem: LeetCodeProblem<(number | null)[], BstIterData, Record<string, never>> = {
  id: "binary-search-tree-iterator",
  number: 173,
  title: "Binary Search Tree Iterator",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/binary-search-tree-iterator/",
  summary: "A stack holding the unvisited left spine yields in-order values one next() at a time.",
  prompt:
    "Implement an iterator over a BST's in-order traversal: next() returns the next smallest value " +
    "and hasNext() reports whether one remains, using O(h) memory.",
  topics: ["Stack", "Tree", "Design", "Binary Search Tree", "Iterator"],
  tags: ["Stack", "Tree", "Design", "Binary Search Tree"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) amortized", timeWorst: "O(h)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [7, 3, 15, null, null, 9, 20],
  defaultOptions: {},
  buildSteps: (input) => bstIterSteps(input),
  Renderer: BstIterRenderer,
};
