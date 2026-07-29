import type { LeetCodeProblem } from "../../types";
import type { SnakesData } from "./algorithm";
import { snakesSteps } from "./algorithm";
import { CODE } from "./code";
import { SnakesRenderer } from "./SnakesRenderer";

export const snakesAndLaddersProblem: LeetCodeProblem<number[][], SnakesData, Record<string, never>> = {
  id: "snakes-and-ladders",
  number: 909,
  title: "Snakes and Ladders",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/snakes-and-ladders/",
  summary: "BFS over squares — each move covers 1-6 ahead, then follows any snake or ladder that lands there.",
  prompt:
    "On an n×n boustrophedon board, each square may have a snake or ladder to another square. Starting at " +
    "square 1, return the fewest dice moves to reach square n², or -1 if impossible.",
  topics: ["Array", "Breadth-First Search", "Matrix"],
  tags: ["Array", "Breadth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ],
  defaultOptions: {},
  buildSteps: (input) => snakesSteps(input),
  Renderer: SnakesRenderer,
};
