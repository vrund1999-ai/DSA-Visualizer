import type { LeetCodeProblem } from "../../types";
import type { PaintGridData } from "./algorithm";
import { paintGridSteps } from "./algorithm";
import { CODE } from "./code";
import { PaintGridRenderer } from "./PaintGridRenderer";

interface PaintGridInput {
  n: number;
}

export const paintN3GridProblem: LeetCodeProblem<PaintGridInput, PaintGridData, Record<string, never>> = {
  id: "number-of-ways-to-paint-n-3-grid",
  number: 1411,
  title: "Number of Ways to Paint N × 3 Grid",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/",
  summary: "Track two row-pattern counts — 2-color (aba) and 3-color (abc); each transitions to the next row by fixed multipliers.",
  prompt:
    "Paint an n×3 grid with three colors so no two adjacent cells (up/down/left/right) share a color. Return " +
    "the number of ways, modulo 1e9+7.",
  topics: ["Dynamic Programming"],
  tags: ["Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 5 }),
  defaultOptions: {},
  buildSteps: (input) => paintGridSteps(input.n),
  Renderer: PaintGridRenderer,
};
