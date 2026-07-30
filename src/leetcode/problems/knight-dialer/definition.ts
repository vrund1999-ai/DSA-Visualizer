import type { LeetCodeProblem } from "../../types";
import type { KnightData } from "./algorithm";
import { knightSteps } from "./algorithm";
import { CODE } from "./code";
import { KnightRenderer } from "./KnightRenderer";

export const knightDialerProblem: LeetCodeProblem<number, KnightData, Record<string, never>> = {
  id: "knight-dialer",
  number: 935,
  title: "Knight Dialer",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/knight-dialer/",
  summary: "DP over the keypad's knight-move graph: each hop distributes per-digit counts to reachable digits.",
  prompt:
    "A knight on a phone keypad starts on any numeric cell and makes n−1 valid knight moves. Count the " +
    "distinct dialable numbers of length n, modulo 1e9+7.",
  topics: ["Dynamic Programming"],
  tags: ["Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 3,
  defaultOptions: {},
  buildSteps: (input) => knightSteps(input),
  Renderer: KnightRenderer,
};
