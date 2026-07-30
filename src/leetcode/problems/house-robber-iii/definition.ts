import type { LeetCodeProblem } from "../../types";
import type { RobTreeData } from "./algorithm";
import { robTreeSteps } from "./algorithm";
import { CODE } from "./code";
import { RobTreeRenderer } from "./RobTreeRenderer";

export const houseRobberIIIProblem: LeetCodeProblem<(number | null)[], RobTreeData, Record<string, never>> = {
  id: "house-robber-iii",
  number: 337,
  title: "House Robber III",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/house-robber-iii/",
  summary: "Each node returns best-if-robbed (skip children) and best-if-skipped (children choose freely).",
  prompt:
    "Houses form a binary tree; robbing two directly-connected houses triggers the alarm. Return the " +
    "maximum amount that can be robbed without alerting police.",
  topics: ["Dynamic Programming", "Tree", "DFS", "Binary Tree"],
  tags: ["Tree", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 2, 3, null, 3, null, 1],
  defaultOptions: {},
  buildSteps: (input) => robTreeSteps(input),
  Renderer: RobTreeRenderer,
};
