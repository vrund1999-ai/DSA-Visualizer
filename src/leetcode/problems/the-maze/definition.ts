import type { LeetCodeProblem } from "../../types";
import type { MazeData } from "./algorithm";
import { mazeSteps } from "./algorithm";
import { CODE } from "./code";
import { MazeRenderer } from "./MazeRenderer";

interface MazeInput {
  maze: number[][];
  start: number[];
  destination: number[];
}

export const theMazeProblem: LeetCodeProblem<MazeInput, MazeData, Record<string, never>> = {
  id: "the-maze",
  number: 490,
  title: "The Maze",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/the-maze/",
  summary: "The ball only stops at walls, so BFS over stop-positions, rolling in each direction until blocked.",
  prompt:
    "A ball in a maze rolls in a chosen direction until it hits a wall, then may pick a new direction. " +
    "Given start and destination cells, determine whether the ball can stop at the destination.",
  topics: ["Array", "DFS", "BFS", "Matrix"],
  tags: ["BFS", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC · max(R,C))", timeWorst: "O(RC · max(R,C))", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    maze: [
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
    ],
    start: [0, 4],
    destination: [4, 4],
  }),
  defaultOptions: {},
  buildSteps: (input) => mazeSteps(input.maze, input.start, input.destination),
  Renderer: MazeRenderer,
};
