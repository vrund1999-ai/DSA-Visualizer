import type { LeetCodeProblem } from "../../types";
import type { ClosestBstData } from "./algorithm";
import { closestBstSteps } from "./algorithm";
import { CODE } from "./code";
import { ClosestBstRenderer } from "./ClosestBstRenderer";

interface ClosestBstInput {
  heap: (number | null)[];
  target: number;
}

export const closestBstValueProblem: LeetCodeProblem<ClosestBstInput, ClosestBstData, Record<string, never>> = {
  id: "closest-binary-search-tree-value",
  number: 270,
  title: "Closest Binary Search Tree Value",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/closest-binary-search-tree-value/",
  summary: "Walk down the BST tracking the nearest value; the ordering means only one root-to-leaf path is needed.",
  prompt:
    "Given the root of a binary search tree and a target value, return the value in the BST closest to the " +
    "target (the smaller value on a tie).",
  topics: ["Binary Search", "Tree", "Depth-First Search", "Binary Search Tree"],
  tags: ["BST", "Tree"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(h)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [4, 2, 5, 1, 3], target: 3.714286 }),
  defaultOptions: {},
  buildSteps: (input) => closestBstSteps(input.heap, input.target),
  Renderer: ClosestBstRenderer,
};
