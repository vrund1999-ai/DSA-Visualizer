import type { LeetCodeProblem } from "../../types";
import type { TrimBSTData } from "./algorithm";
import { trimBSTSteps } from "./algorithm";
import { CODE } from "./code";
import { TrimBSTRenderer } from "./TrimBSTRenderer";

interface TrimBSTInput {
  heap: (number | null)[];
  low: number;
  high: number;
}

export const trimBinarySearchTreeProblem: LeetCodeProblem<TrimBSTInput, TrimBSTData, Record<string, never>> = {
  id: "trim-a-binary-search-tree",
  number: 669,
  title: "Trim a Binary Search Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/trim-a-binary-search-tree/",
  summary: "BST ordering lets each out-of-range node drop a whole subtree.",
  prompt:
    "Given the root of a binary search tree and a range [low, high], trim the tree so all " +
    "node values lie within the range, keeping the relative structure. Return the new root. " +
    "(Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Search Tree"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [3, 1, 4, null, 2], low: 2, high: 4 }),
  defaultOptions: {},
  buildSteps: (input) => trimBSTSteps(input.heap, input.low, input.high),
  Renderer: TrimBSTRenderer,
};
