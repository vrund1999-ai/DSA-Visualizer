import type { LeetCodeProblem } from "../../types";
import type { SpiralData } from "./algorithm";
import { spiralSteps } from "./algorithm";
import { CODE } from "./code";
import { SpiralRenderer } from "./SpiralRenderer";

interface SpiralInput {
  rows: number;
  cols: number;
  rStart: number;
  cStart: number;
}

export const spiralMatrixIIIProblem: LeetCodeProblem<SpiralInput, SpiralData, Record<string, never>> = {
  id: "spiral-matrix-iii",
  number: 885,
  title: "Spiral Matrix III",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/spiral-matrix-iii/",
  summary: "Walk clockwise in legs that grow every two turns, recording cells that fall inside the grid.",
  prompt:
    "Starting at (rStart, cStart) in a rows×cols grid, walk in a clockwise spiral (stepping outside the " +
    "grid when needed). Return the coordinates of all grid cells in the order visited.",
  topics: ["Array", "Matrix", "Simulation"],
  tags: ["Array", "Matrix", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(max(R,C)²)", timeWorst: "O(max(R,C)²)", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => ({ rows: 5, cols: 5, rStart: 2, cStart: 2 }),
  defaultOptions: {},
  buildSteps: (input) => spiralSteps(input.rows, input.cols, input.rStart, input.cStart),
  Renderer: SpiralRenderer,
};
