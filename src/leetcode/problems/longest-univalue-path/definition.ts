import type { LeetCodeProblem } from "../../types";
import type { UnivalueData } from "./algorithm";
import { univalueSteps } from "./algorithm";
import { CODE } from "./code";
import { UnivalueRenderer } from "./UnivalueRenderer";

export const longestUnivaluePathProblem: LeetCodeProblem<(number | null)[], UnivalueData, Record<string, never>> = {
  id: "longest-univalue-path",
  number: 687,
  title: "Longest Univalue Path",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-univalue-path/",
  summary: "DFS returns the longest same-value arrow down each side; their sum through a node is a candidate path.",
  prompt:
    "Given the root of a binary tree, return the length (in edges) of the longest path where every node " +
    "has the same value. The path need not pass through the root.",
  topics: ["Tree", "DFS", "Binary Tree"],
  tags: ["Tree", "DFS"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 4, 5, 1, 1, null, 5],
  defaultOptions: {},
  buildSteps: (input) => univalueSteps(input),
  Renderer: UnivalueRenderer,
};
