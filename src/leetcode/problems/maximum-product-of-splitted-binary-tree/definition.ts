import type { LeetCodeProblem } from "../../types";
import type { SplitTreeData } from "./algorithm";
import { splitTreeSteps } from "./algorithm";
import { CODE } from "./code";
import { SplitTreeRenderer } from "./SplitTreeRenderer";

export const maxProductSplitTreeProblem: LeetCodeProblem<(number | null)[], SplitTreeData, Record<string, never>> = {
  id: "maximum-product-of-splitted-binary-tree",
  number: 1339,
  title: "Maximum Product of Splitted Binary Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/",
  summary: "Cutting an edge yields parts s and total−s; compute every subtree sum and maximize s·(total−s).",
  prompt:
    "Remove exactly one edge to split a binary tree into two subtrees. Return the maximum product of their " +
    "sums, modulo 1e9+7.",
  topics: ["Tree", "DFS", "Binary Tree"],
  tags: ["Tree", "DFS"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5, 6],
  defaultOptions: {},
  buildSteps: (input) => splitTreeSteps(input),
  Renderer: SplitTreeRenderer,
};
