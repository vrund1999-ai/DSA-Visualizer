import type { LeetCodeProblem } from "../../types";
import type { BurstData } from "./algorithm";
import { burstSteps } from "./algorithm";
import { CODE } from "./code";
import { BurstRenderer } from "./BurstRenderer";

export const burstBalloonsProblem: LeetCodeProblem<number[], BurstData, Record<string, never>> = {
  id: "burst-balloons",
  number: 312,
  title: "Burst Balloons",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/burst-balloons/",
  summary: "Interval DP choosing which balloon bursts last, so its neighbors are the interval's padded ends.",
  prompt:
    "Bursting balloon i earns nums[i-1]·nums[i]·nums[i+1] coins (out-of-range = 1). Return the maximum " +
    "coins from bursting all the balloons.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n³)", timeWorst: "O(n³)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 1, 5, 8],
  defaultOptions: {},
  buildSteps: (input) => burstSteps(input),
  Renderer: BurstRenderer,
};
