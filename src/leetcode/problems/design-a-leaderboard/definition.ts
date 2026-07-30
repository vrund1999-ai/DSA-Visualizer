import type { LeetCodeProblem } from "../../types";
import type { LeaderboardData, LeaderboardOp } from "./algorithm";
import { leaderboardSteps } from "./algorithm";
import { CODE } from "./code";
import { LeaderboardRenderer } from "./LeaderboardRenderer";

interface LeaderboardInput {
  ops: LeaderboardOp[];
}

export const designLeaderboardProblem: LeetCodeProblem<LeaderboardInput, LeaderboardData, Record<string, never>> = {
  id: "design-a-leaderboard",
  number: 1244,
  title: "Design a Leaderboard",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/design-a-leaderboard/",
  summary: "A player→score map: addScore accumulates, reset zeroes, and top(K) sums the K highest scores.",
  prompt:
    "Implement a Leaderboard: addScore(playerId, score) adds to a player's total, top(K) returns the sum of " +
    "the K highest scores, and reset(playerId) sets a player's score back to 0.",
  topics: ["Hash Table", "Design", "Sorting"],
  tags: ["Design", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 52.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n) per top", timeWorst: "O(n log n) per top", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    ops: [
      { type: "add", player: 1, score: 73 },
      { type: "add", player: 2, score: 56 },
      { type: "add", player: 3, score: 39 },
      { type: "add", player: 4, score: 51 },
      { type: "add", player: 5, score: 4 },
      { type: "top", k: 1 },
      { type: "reset", player: 1 },
      { type: "reset", player: 2 },
      { type: "add", player: 2, score: 51 },
      { type: "top", k: 3 },
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => leaderboardSteps(input.ops),
  Renderer: LeaderboardRenderer,
};
