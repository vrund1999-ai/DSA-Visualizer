import type { LeetCodeProblem } from "../../types";
import type { JumpData } from "./algorithm";
import { jumpSteps } from "./algorithm";
import { CODE } from "./code";
import { JumpRenderer } from "./JumpRenderer";

export const jumpGameProblem: LeetCodeProblem<
  number[],
  JumpData,
  Record<string, never>
> = {
  id: "jump-game",
  number: 55,
  title: "Jump Game",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/jump-game/",
  summary: "Can you reach the last index? Greedy reachability.",
  prompt:
    "Given an array `nums` where each value is the maximum jump length from that " +
    "position, return true if you can reach the last index starting from index 0.",
  topics: ["Array", "Dynamic Programming", "Greedy"],
  tags: ["Array", "Dynamic Programming", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 62,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 3, 1, 1, 4],
  defaultOptions: {},
  buildSteps: (input) => jumpSteps(input),
  Renderer: JumpRenderer,
};
