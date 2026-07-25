import type { LeetCodeProblem } from "../../types";
import type { ZeroOneData } from "./algorithm";
import { zeroOneSteps } from "./algorithm";
import { CODE } from "./code";
import { ZeroOneRenderer } from "./ZeroOneRenderer";

export const zeroOneMatrixProblem: LeetCodeProblem<number[][], ZeroOneData, Record<string, never>> = {
  id: "01-matrix",
  number: 542,
  title: "01 Matrix",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/01-matrix/",
  summary: "Multi-source BFS seeded with every 0 gives each cell its distance to a 0.",
  prompt:
    "Given a binary matrix, return a matrix of the same size where each cell holds its " +
    "distance to the nearest 0 (4-directional).",
  topics: ["Array", "Dynamic Programming", "Breadth-First Search", "Matrix"],
  tags: ["Array", "Breadth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => zeroOneSteps(input),
  Renderer: ZeroOneRenderer,
};
