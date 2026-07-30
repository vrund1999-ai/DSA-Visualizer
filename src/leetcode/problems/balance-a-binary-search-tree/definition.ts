import type { LeetCodeProblem } from "../../types";
import type { BalanceBSTData } from "./algorithm";
import { balanceBSTSteps } from "./algorithm";
import { CODE } from "./code";
import { BalanceBSTRenderer } from "./BalanceBSTRenderer";

export const balanceBSTProblem: LeetCodeProblem<number[], BalanceBSTData, Record<string, never>> = {
  id: "balance-a-binary-search-tree",
  number: 1382,
  title: "Balance a Binary Search Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/balance-a-binary-search-tree/",
  summary: "In-order traversal yields sorted values; recursively make each range's middle the subtree root.",
  prompt:
    "Given a binary search tree, return a balanced BST with the same node values. (The input is shown as " +
    "its sorted in-order sequence.)",
  topics: ["Divide and Conquer", "Greedy", "Tree", "Binary Search Tree", "DFS"],
  tags: ["Tree", "Divide and Conquer"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5, 6, 7],
  defaultOptions: {},
  buildSteps: (input) => balanceBSTSteps(input),
  Renderer: BalanceBSTRenderer,
};
