import type { LeetCodeProblem } from "../../types";
import type { WallsData } from "./algorithm";
import { INF, wallsSteps } from "./algorithm";
import { CODE } from "./code";
import { WallsRenderer } from "./WallsRenderer";

export const wallsAndGatesProblem: LeetCodeProblem<number[][], WallsData, Record<string, never>> = {
  id: "walls-and-gates",
  number: 286,
  title: "Walls and Gates",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/walls-and-gates/",
  summary: "Multi-source BFS from every gate at once fills each room with its distance to the nearest gate.",
  prompt:
    "In a grid of gates (0), walls (-1), and empty rooms (INF), fill each empty room with the distance to " +
    "its nearest gate; rooms that cannot reach a gate stay INF.",
  topics: ["Array", "BFS", "Matrix"],
  tags: ["BFS", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [INF, -1, 0, INF],
    [INF, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF],
  ],
  defaultOptions: {},
  buildSteps: (input) => wallsSteps(input),
  Renderer: WallsRenderer,
};
