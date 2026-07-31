import type { LeetCodeProblem } from "../../types";
import type { DivisorGameData } from "./algorithm";
import { divisorGameSteps } from "./algorithm";
import { CODE } from "./code";
import { DivisorGameRenderer } from "./DivisorGameRenderer";

interface DivisorGameInput {
  n: number;
}

export const divisorGameProblem: LeetCodeProblem<DivisorGameInput, DivisorGameData, Record<string, never>> = {
  id: "divisor-game",
  number: 1025,
  title: "Divisor Game",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/divisor-game/",
  summary: "dp[i] is a win if some proper-divisor move leaves the opponent in a losing state; the pattern turns out to be n even.",
  prompt:
    "Starting with the number n, players alternately replace it with n − x for a divisor x (0 < x < n, " +
    "n % x == 0). A player who cannot move loses. Return true if Alice (first) wins with optimal play.",
  topics: ["Math", "Dynamic Programming", "Game Theory"],
  tags: ["Dynamic Programming", "Game Theory"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 8 }),
  defaultOptions: {},
  buildSteps: (input) => divisorGameSteps(input.n),
  Renderer: DivisorGameRenderer,
};
