import type { LeetCodeProblem } from "../../types";
import type { ZigzagPathData } from "./algorithm";
import { zigzagPathSteps } from "./algorithm";
import { CODE } from "./code";
import { ZigzagPathRenderer } from "./ZigzagPathRenderer";

export const pathInZigzagTreeProblem: LeetCodeProblem<number, ZigzagPathData, Record<string, never>> = {
  id: "path-in-zigzag-labelled-binary-tree",
  number: 1104,
  title: "Path In Zigzag Labelled Binary Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/",
  summary: "Mirror the label within its level, then halve, to climb to the root.",
  prompt:
    "In an infinite binary tree where rows are labelled left-to-right then right-to-left " +
    "alternately, return the labels on the path from the root to the node labelled `label`.",
  topics: ["Math", "Tree", "Binary Tree"],
  tags: ["Math", "Tree", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => 14,
  defaultOptions: {},
  buildSteps: (input) => zigzagPathSteps(input),
  Renderer: ZigzagPathRenderer,
};
