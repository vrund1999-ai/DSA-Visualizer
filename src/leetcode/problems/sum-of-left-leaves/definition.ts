import type { LeetCodeProblem } from "../../types";
import type { LeftLeafData } from "./algorithm";
import { leftLeafSteps } from "./algorithm";
import { CODE } from "./code";
import { LeftLeafRenderer } from "./LeftLeafRenderer";

export const sumOfLeftLeavesProblem: LeetCodeProblem<(number | null)[], LeftLeafData, Record<string, never>> = {
  id: "sum-of-left-leaves",
  number: 404,
  title: "Sum of Left Leaves",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/sum-of-left-leaves/",
  summary: "DFS carrying a left-child flag; add a node's value only when it is both a leaf and a left child.",
  prompt: "Given the root of a binary tree, return the sum of all left leaves (leaf nodes that are the left child of their parent).",
  topics: ["Tree", "DFS", "BFS", "Binary Tree"],
  tags: ["Tree", "DFS"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 9, 20, null, null, 15, 7],
  defaultOptions: {},
  buildSteps: (input) => leftLeafSteps(input),
  Renderer: LeftLeafRenderer,
};
