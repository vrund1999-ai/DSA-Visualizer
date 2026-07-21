import type { LeetCodeProblem } from "../../types";
import type { RobberData } from "./algorithm";
import { robberSteps } from "./algorithm";
import { CODE } from "./code";
import { RobberRenderer } from "./RobberRenderer";

export const houseRobberProblem: LeetCodeProblem<
  number[],
  RobberData,
  Record<string, never>
> = {
  id: "house-robber",
  number: 198,
  title: "House Robber",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/house-robber/",
  summary: "Max loot without robbing two adjacent houses (DP).",
  prompt:
    "Each house holds some money, but robbing two adjacent houses triggers the " +
    "alarm. Given `nums`, return the maximum amount you can rob without alerting " +
    "the police.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 59.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 7, 9, 3, 1],
  defaultOptions: {},
  buildSteps: (input) => robberSteps(input),
  Renderer: RobberRenderer,
};
