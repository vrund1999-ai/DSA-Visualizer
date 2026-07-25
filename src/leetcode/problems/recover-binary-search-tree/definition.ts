import type { LeetCodeProblem } from "../../types";
import type { RecoverBstData } from "./algorithm";
import { recoverBstSteps } from "./algorithm";
import { CODE } from "./code";
import { RecoverBstRenderer } from "./RecoverBstRenderer";

export const recoverBinarySearchTreeProblem: LeetCodeProblem<(number | null)[], RecoverBstData, Record<string, never>> = {
  id: "recover-binary-search-tree",
  number: 99,
  title: "Recover Binary Search Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/recover-binary-search-tree/",
  summary: "In-order should be sorted; the descents pinpoint the two swapped nodes to exchange.",
  prompt:
    "Two nodes of a binary search tree were swapped by mistake. Recover the tree without changing " +
    "its structure.",
  topics: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Search Tree"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 6, 2, 1, 3, 5, 7],
  defaultOptions: {},
  buildSteps: (input) => recoverBstSteps(input),
  Renderer: RecoverBstRenderer,
};
