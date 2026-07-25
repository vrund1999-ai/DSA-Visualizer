import type { LeetCodeProblem } from "../../types";
import type { MaxWidthData } from "./algorithm";
import { maxWidthSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxWidthRenderer } from "./MaxWidthRenderer";

export const maximumWidthBinaryTreeProblem: LeetCodeProblem<(number | null)[], MaxWidthData, Record<string, never>> = {
  id: "maximum-width-of-binary-tree",
  number: 662,
  title: "Maximum Width of Binary Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
  summary: "BFS with complete-tree position indices; width = last − first + 1.",
  prompt:
    "The width of a level is the distance between its leftmost and rightmost non-null " +
    "nodes, counting the null gaps between them. Return the maximum width across all " +
    "levels. (Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 2, 5, 3, null, 9],
  defaultOptions: {},
  buildSteps: (input) => maxWidthSteps(input),
  Renderer: MaxWidthRenderer,
};
