import type { LeetCodeProblem } from "../../types";
import type { PathSumData, PathSumInput } from "./algorithm";
import { pathSumSteps } from "./algorithm";
import { CODE } from "./code";
import { PathSumRenderer } from "./PathSumRenderer";

export const pathSumProblem: LeetCodeProblem<
  PathSumInput,
  PathSumData,
  Record<string, never>
> = {
  id: "path-sum",
  number: 112,
  title: "Path Sum",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/path-sum/",
  summary: "Does a root-to-leaf path add up to the target?",
  prompt:
    "Given the root of a binary tree and a target sum, return true if the tree " +
    "has a root-to-leaf path where the node values add up to the target. (Input " +
    "shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [5, 4, 8, 11, null, 13, 4, 7, 2], target: 22 }),
  defaultOptions: {},
  buildSteps: (input) => pathSumSteps(input),
  Renderer: PathSumRenderer,
};
