import type { LeetCodeProblem } from "../../types";
import type { KnightMovesData } from "./algorithm";
import { knightMovesSteps } from "./algorithm";
import { CODE } from "./code";
import { KnightMovesRenderer } from "./KnightMovesRenderer";

interface KnightMovesInput {
  x: number;
  y: number;
}

export const minimumKnightMovesProblem: LeetCodeProblem<KnightMovesInput, KnightMovesData, Record<string, never>> = {
  id: "minimum-knight-moves",
  number: 1197,
  title: "Minimum Knight Moves",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-knight-moves/",
  summary: "BFS rings outward from the origin; the ring on which the target first appears is the fewest moves.",
  prompt:
    "On an infinite chessboard a knight starts at (0, 0). Return the minimum number of knight moves to " +
    "reach the square (x, y).",
  topics: ["BFS"],
  tags: ["BFS"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(max(x,y)²)", timeWorst: "O(max(x,y)²)", space: "O(max(x,y)²)" },
  inputSchema: [],
  makeDefaultInput: () => ({ x: 5, y: 5 }),
  defaultOptions: {},
  buildSteps: (input) => knightMovesSteps(input.x, input.y),
  Renderer: KnightMovesRenderer,
};
