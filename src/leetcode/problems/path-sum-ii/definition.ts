import type { LeetCodeProblem } from "../../types";
import type { PathSumData } from "./algorithm";
import { pathSumSteps } from "./algorithm";
import { CODE } from "./code";
import { PathSumRenderer } from "./PathSumRenderer";

interface PathSumInput {
  heap: (number | null)[];
  target: number;
}

export const pathSumIIProblem: LeetCodeProblem<PathSumInput, PathSumData, Record<string, never>> = {
  id: "path-sum-ii",
  number: 113,
  title: "Path Sum II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/path-sum-ii/",
  summary: "DFS carrying the remaining target; leaves reaching zero yield a path.",
  prompt:
    "Given the root of a binary tree and a target sum, return every root-to-leaf path " +
    "whose node values add up to the target. (Input shown as a heap array.)",
  topics: ["Backtracking", "Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Backtracking", "Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n²)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [5, 4, 8, 11, null, 13, 4, 7, 2], target: 22 }),
  defaultOptions: {},
  buildSteps: (input) => pathSumSteps(input.heap, input.target),
  Renderer: PathSumRenderer,
};
