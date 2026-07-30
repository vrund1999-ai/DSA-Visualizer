import type { LeetCodeProblem } from "../../types";
import type { KthLevelSumData } from "./algorithm";
import { kthLevelSumSteps } from "./algorithm";
import { CODE } from "./code";
import { KthLevelSumRenderer } from "./KthLevelSumRenderer";

interface KthLevelSumInput {
  heap: (number | null)[];
  k: number;
}

export const kthLargestLevelSumProblem: LeetCodeProblem<KthLevelSumInput, KthLevelSumData, Record<string, never>> = {
  id: "kth-largest-sum-in-a-binary-tree",
  number: 2583,
  title: "Kth Largest Sum in a Binary Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/",
  summary: "BFS sums each level, then the k-th largest of those level sums is the answer (−1 if fewer than k levels).",
  prompt:
    "Given the root of a binary tree and an integer k, return the k-th largest level sum (the sum of node " +
    "values at each depth). Return -1 if the tree has fewer than k levels.",
  topics: ["Tree", "Breadth-First Search", "Sorting", "Binary Tree"],
  tags: ["BFS", "Tree", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [5, 8, 9, 2, 1, 3, 7, 4, 6], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => kthLevelSumSteps(input.heap, input.k),
  Renderer: KthLevelSumRenderer,
};
