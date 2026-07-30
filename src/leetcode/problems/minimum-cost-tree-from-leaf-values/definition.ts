import type { LeetCodeProblem } from "../../types";
import type { LeafValuesData } from "./algorithm";
import { leafValuesSteps } from "./algorithm";
import { CODE } from "./code";
import { LeafValuesRenderer } from "./LeafValuesRenderer";

interface LeafValuesInput {
  arr: number[];
}

export const minCostTreeLeafValuesProblem: LeetCodeProblem<LeafValuesInput, LeafValuesData, Record<string, never>> = {
  id: "minimum-cost-tree-from-leaf-values",
  number: 1130,
  title: "Minimum Cost Tree From Leaf Values",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/",
  summary: "Greedily merge each leaf with its smaller neighbour first — a decreasing monotonic stack pays value × min(neighbour, current).",
  prompt:
    "Given the in-order leaf values of a binary tree, each internal node's value is the product of the " +
    "largest leaf in its left and right subtrees. Return the smallest possible sum of all internal nodes.",
  topics: ["Array", "Dynamic Programming", "Stack", "Greedy", "Monotonic Stack"],
  tags: ["Monotonic Stack", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr: [6, 2, 4] }),
  defaultOptions: {},
  buildSteps: (input) => leafValuesSteps(input.arr),
  Renderer: LeafValuesRenderer,
};
