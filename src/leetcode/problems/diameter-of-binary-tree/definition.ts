import type { LeetCodeProblem } from "../../types";
import type { DiameterData } from "./algorithm";
import { diameterSteps } from "./algorithm";
import { CODE } from "./code";
import { DiameterRenderer } from "./DiameterRenderer";

export const diameterProblem: LeetCodeProblem<
  (number | null)[],
  DiameterData,
  Record<string, never>
> = {
  id: "diameter-of-binary-tree",
  number: 543,
  title: "Diameter of Binary Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/diameter-of-binary-tree/",
  summary: "Longest path between any two nodes (post-order DFS).",
  prompt:
    "Given the root of a binary tree, return the length of its diameter — the " +
    "number of edges on the longest path between any two nodes (which may not " +
    "pass through the root). (Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 45.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5],
  defaultOptions: {},
  buildSteps: (input) => diameterSteps(input),
  Renderer: DiameterRenderer,
};
