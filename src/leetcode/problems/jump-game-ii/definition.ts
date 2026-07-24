import type { LeetCodeProblem } from "../../types";
import type { JumpIIData } from "./algorithm";
import { jumpIISteps } from "./algorithm";
import { CODE } from "./code";
import { JumpIIRenderer } from "./JumpIIRenderer";

export const jumpGameIIProblem: LeetCodeProblem<
  number[],
  JumpIIData,
  Record<string, never>
> = {
  id: "jump-game-ii",
  number: 45,
  title: "Jump Game II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/jump-game-ii/",
  summary: "Fewest jumps to reach the last index (greedy BFS).",
  prompt:
    "Each element of `nums` is the maximum jump length from that position. " +
    "Return the minimum number of jumps to reach the last index (always possible).",
  topics: ["Array", "Dynamic Programming", "Greedy"],
  tags: ["Array", "Dynamic Programming", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 49.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 3, 1, 1, 4],
  defaultOptions: {},
  buildSteps: (input) => jumpIISteps(input),
  Renderer: JumpIIRenderer,
};
