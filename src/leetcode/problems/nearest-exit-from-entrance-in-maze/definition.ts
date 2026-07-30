import type { LeetCodeProblem } from "../../types";
import type { MazeExitData } from "./algorithm";
import { mazeExitSteps } from "./algorithm";
import { CODE } from "./code";
import { MazeExitRenderer } from "./MazeExitRenderer";

interface MazeExitInput {
  maze: string[][];
  entrance: number[];
}

export const nearestExitMazeProblem: LeetCodeProblem<MazeExitInput, MazeExitData, Record<string, never>> = {
  id: "nearest-exit-from-entrance-in-maze",
  number: 1926,
  title: "Nearest Exit from Entrance in Maze",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/",
  summary: "BFS rings outward from the entrance; the first border empty cell reached is the nearest exit.",
  prompt:
    "In a maze of walls ('+') and empty cells ('.'), find the number of steps to the nearest exit — a " +
    "border empty cell other than the entrance — or -1 if none.",
  topics: ["Array", "BFS", "Matrix"],
  tags: ["BFS", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    maze: [
      ["+", "+", ".", "+"],
      [".", ".", ".", "+"],
      ["+", "+", "+", "."],
    ],
    entrance: [1, 2],
  }),
  defaultOptions: {},
  buildSteps: (input) => mazeExitSteps(input.maze, input.entrance),
  Renderer: MazeExitRenderer,
};
