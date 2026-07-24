import type { LeetCodeProblem } from "../../types";
import type { CircularGameData } from "./algorithm";
import { circularGameSteps } from "./algorithm";
import { CODE } from "./code";
import { CircularGameRenderer } from "./CircularGameRenderer";

interface CircularGameInput {
  n: number;
  k: number;
}

export const findTheWinnerProblem: LeetCodeProblem<CircularGameInput, CircularGameData, Record<string, never>> = {
  id: "find-the-winner-of-the-circular-game",
  number: 1823,
  title: "Find the Winner of the Circular Game",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-the-winner-of-the-circular-game/",
  summary: "Josephus problem — simulate elimination of every kth player in a circle.",
  prompt:
    "n friends sit in a circle numbered 1..n. Starting at friend 1, count k friends " +
    "clockwise; that friend leaves the circle. Counting resumes from the next friend. " +
    "Return the number of the last friend remaining.",
  topics: ["Math", "Recursion", "Queue", "Simulation"],
  tags: ["Math", "Recursion", "Queue", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 45.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·k)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 6, k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => circularGameSteps(input.n, input.k),
  Renderer: CircularGameRenderer,
};
