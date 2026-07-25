import type { LeetCodeProblem } from "../../types";
import type { TwoSumBstData } from "./algorithm";
import { twoSumBstSteps } from "./algorithm";
import { CODE } from "./code";
import { TwoSumBstRenderer } from "./TwoSumBstRenderer";

interface TwoSumBstInput {
  heap: (number | null)[];
  k: number;
}

export const twoSumIVProblem: LeetCodeProblem<TwoSumBstInput, TwoSumBstData, Record<string, never>> = {
  id: "two-sum-iv-input-is-a-bst",
  number: 653,
  title: "Two Sum IV - Input is a BST",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
  summary: "DFS the tree with a hash set of seen values, checking each node's complement k − val.",
  prompt: "Given the root of a binary search tree and an integer k, return true if two different nodes' values sum to k.",
  topics: ["Hash Table", "Two Pointers", "Tree", "Depth-First Search", "Binary Search Tree"],
  tags: ["Tree", "Depth-First Search", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [5, 3, 6, 2, 4, null, 7], k: 9 }),
  defaultOptions: {},
  buildSteps: (input) => twoSumBstSteps(input.heap, input.k),
  Renderer: TwoSumBstRenderer,
};
