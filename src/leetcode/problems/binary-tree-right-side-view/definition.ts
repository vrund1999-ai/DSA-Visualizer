import type { LeetCodeProblem } from "../../types";
import type { RightViewData } from "./algorithm";
import { rightViewSteps } from "./algorithm";
import { CODE } from "./code";
import { RightViewRenderer } from "./RightViewRenderer";

export const binaryTreeRightSideViewProblem: LeetCodeProblem<
  (number | null)[],
  RightViewData,
  Record<string, never>
> = {
  id: "binary-tree-right-side-view",
  number: 199,
  title: "Binary Tree Right Side View",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/binary-tree-right-side-view/",
  summary: "Level-order BFS keeping the last node dequeued on each level.",
  prompt:
    "Given the root of a binary tree, return the values of the nodes you can see ordered " +
    "from top to bottom when looking at the tree from the right side. " +
    "(Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, null, 5, null, 4],
  defaultOptions: {},
  buildSteps: (input) => rightViewSteps(input),
  Renderer: RightViewRenderer,
};
