import type { LeetCodeProblem } from "../../types";
import type { CountNodesData } from "./algorithm";
import { countNodesSteps } from "./algorithm";
import { CODE } from "./code";
import { CountNodesRenderer } from "./CountNodesRenderer";

export const countCompleteTreeNodesProblem: LeetCodeProblem<(number | null)[], CountNodesData, Record<string, never>> = {
  id: "count-complete-tree-nodes",
  number: 222,
  title: "Count Complete Tree Nodes",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/count-complete-tree-nodes/",
  summary: "Compare leftmost/rightmost path heights: equal ⇒ perfect subtree (2^h−1), else recurse.",
  prompt:
    "Given the root of a complete binary tree, count its nodes in better than O(n) time by using " +
    "the tree's completeness.",
  topics: ["Binary Search", "Bit Manipulation", "Tree", "Binary Tree"],
  tags: ["Tree", "Binary Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log²n)", timeWorst: "O(log²n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5, 6],
  defaultOptions: {},
  buildSteps: (input) => countNodesSteps(input),
  Renderer: CountNodesRenderer,
};
