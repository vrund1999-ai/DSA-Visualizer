import type { LeetCodeProblem } from "../../types";
import type { JumpVIIData } from "./algorithm";
import { jumpVIISteps } from "./algorithm";
import { CODE } from "./code";
import { JumpVIIRenderer } from "./JumpVIIRenderer";

interface JumpVIIInput {
  s: string;
  minJump: number;
  maxJump: number;
}

export const jumpGameVIIProblem: LeetCodeProblem<JumpVIIInput, JumpVIIData, Record<string, never>> = {
  id: "jump-game-vii",
  number: 1871,
  title: "Jump Game VII",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/jump-game-vii/",
  summary: "Reachability DP: index i is reachable if it's '0' and a reachable index sits in [i−max, i−min].",
  prompt:
    "From index 0 of a binary string you may jump forward between minJump and maxJump, but only onto " +
    "'0' cells. Return whether index n−1 is reachable.",
  topics: ["String", "Dynamic Programming", "Prefix Sum", "Sliding Window"],
  tags: ["String", "Dynamic Programming", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "011010", minJump: 2, maxJump: 3 }),
  defaultOptions: {},
  buildSteps: (input) => jumpVIISteps(input.s, input.minJump, input.maxJump),
  Renderer: JumpVIIRenderer,
};
