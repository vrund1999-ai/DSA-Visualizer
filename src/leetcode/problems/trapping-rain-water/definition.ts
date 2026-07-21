import type { LeetCodeProblem } from "../../types";
import type { TrapData } from "./algorithm";
import { trapSteps } from "./algorithm";
import { CODE } from "./code";
import { TrapRenderer } from "./TrapRenderer";

export const trappingRainWaterProblem: LeetCodeProblem<
  number[],
  TrapData,
  Record<string, never>
> = {
  id: "trapping-rain-water",
  number: 42,
  title: "Trapping Rain Water",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/trapping-rain-water/",
  summary: "How much rain the elevation map traps, via two pointers.",
  prompt:
    "Given `height`, a non-negative elevation map where the width of each bar " +
    "is 1, compute how much water it can trap after raining.",
  topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack"],
  tags: ["Array", "Two Pointers", "Dynamic Programming", "Stack"],
  companies: ["Bloomberg"],
  frequency: 80.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
  defaultOptions: {},
  buildSteps: (input) => trapSteps(input),
  Renderer: TrapRenderer,
};
