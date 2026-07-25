import type { LeetCodeProblem } from "../../types";
import type { MinDepthData } from "./algorithm";
import { minDepthSteps } from "./algorithm";
import { CODE } from "./code";
import { MinDepthRenderer } from "./MinDepthRenderer";

export const minimumDepthProblem: LeetCodeProblem<(number | null)[], MinDepthData, Record<string, never>> = {
  id: "minimum-depth-of-binary-tree",
  number: 111,
  title: "Minimum Depth of Binary Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
  summary: "BFS returns the depth of the first leaf it encounters.",
  prompt:
    "Return the minimum depth of a binary tree: the number of nodes along the shortest " +
    "path from the root down to the nearest leaf. (Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 9, 20, null, null, 15, 7],
  defaultOptions: {},
  buildSteps: (input) => minDepthSteps(input),
  Renderer: MinDepthRenderer,
};
