import type { LeetCodeProblem } from "../../types";
import type { CamerasData } from "./algorithm";
import { camerasSteps } from "./algorithm";
import { CODE } from "./code";
import { CamerasRenderer } from "./CamerasRenderer";

export const binaryTreeCamerasProblem: LeetCodeProblem<(number | null)[], CamerasData, Record<string, never>> = {
  id: "binary-tree-cameras",
  number: 968,
  title: "Binary Tree Cameras",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/binary-tree-cameras/",
  summary: "Post-order greedy: cover leaves from their parents, placing cameras as high as possible.",
  prompt:
    "Each camera on a node monitors its parent, itself, and its immediate children. Return the minimum " +
    "number of cameras needed to monitor every node of the tree.",
  topics: ["Dynamic Programming", "Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 0, null, 0, null, null, null, 0, 0],
  defaultOptions: {},
  buildSteps: (input) => camerasSteps(input),
  Renderer: CamerasRenderer,
};
