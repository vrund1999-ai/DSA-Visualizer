import type { LeetCodeProblem } from "../../types";
import type { HouseRobberIIData } from "./algorithm";
import { houseRobberIISteps } from "./algorithm";
import { CODE } from "./code";
import { HouseRobberIIRenderer } from "./HouseRobberIIRenderer";

export const houseRobberIIProblem: LeetCodeProblem<number[], HouseRobberIIData, Record<string, never>> = {
  id: "house-robber-ii",
  number: 213,
  title: "House Robber II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/house-robber-ii/",
  summary: "Circular houses: run the linear rob DP twice, excluding each end.",
  prompt:
    "Houses are arranged in a circle, so the first and last are adjacent. You cannot rob " +
    "two adjacent houses. Return the maximum amount you can rob without alerting police.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 3, 2, 5, 1],
  defaultOptions: {},
  buildSteps: (input) => houseRobberIISteps(input),
  Renderer: HouseRobberIIRenderer,
};
