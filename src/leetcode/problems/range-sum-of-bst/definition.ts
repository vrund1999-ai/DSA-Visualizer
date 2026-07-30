import type { LeetCodeProblem } from "../../types";
import type { RangeSumData } from "./algorithm";
import { rangeSumSteps } from "./algorithm";
import { CODE } from "./code";
import { RangeSumRenderer } from "./RangeSumRenderer";

interface RangeSumInput {
  heap: (number | null)[];
  low: number;
  high: number;
}

export const rangeSumBstProblem: LeetCodeProblem<RangeSumInput, RangeSumData, Record<string, never>> = {
  id: "range-sum-of-bst",
  number: 938,
  title: "Range Sum of BST",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/range-sum-of-bst/",
  summary: "Use the BST order to prune: below low skips the left subtree, above high skips the right subtree.",
  prompt:
    "Given the root of a binary search tree and a range [low, high], return the sum of the values of all " +
    "nodes whose value lies within the range.",
  topics: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
  tags: ["Tree", "DFS", "BST"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [10, 5, 15, 3, 7, null, 18], low: 7, high: 15 }),
  defaultOptions: {},
  buildSteps: (input) => rangeSumSteps(input.heap, input.low, input.high),
  Renderer: RangeSumRenderer,
};
