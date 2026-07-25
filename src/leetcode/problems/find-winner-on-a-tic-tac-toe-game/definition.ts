import type { LeetCodeProblem } from "../../types";
import type { TicTacToeData } from "./algorithm";
import { tictactoeSteps } from "./algorithm";
import { CODE } from "./code";
import { TicTacToeRenderer } from "./TicTacToeRenderer";

export const findWinnerTicTacToeProblem: LeetCodeProblem<number[][], TicTacToeData, Record<string, never>> = {
  id: "find-winner-on-a-tic-tac-toe-game",
  number: 1275,
  title: "Find Winner on a Tic Tac Toe Game",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/",
  summary: "Replay moves alternating A/B; after each, check the eight lines for a completed triple.",
  prompt:
    "Given the sequence of moves on a 3×3 board (A moves first, then B), return the winner ('A' " +
    "or 'B'), 'Draw' if the board fills with no winner, or 'Pending' if the game is unfinished.",
  topics: ["Array", "Hash Table", "Matrix", "Simulation"],
  tags: ["Array", "Matrix", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]],
  defaultOptions: {},
  buildSteps: (input) => tictactoeSteps(input),
  Renderer: TicTacToeRenderer,
};
