import type { LeetCodeProblem } from "../../types";
import type { MagicData } from "./algorithm";
import { magicSteps } from "./algorithm";
import { CODE } from "./code";
import { MagicRenderer } from "./MagicRenderer";

export const magicSquaresInGridProblem: LeetCodeProblem<number[][], MagicData, Record<string, never>> = {
  id: "magic-squares-in-grid",
  number: 840,
  title: "Magic Squares In Grid",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/magic-squares-in-grid/",
  summary: "Slide a 3×3 window; a magic square holds 1–9 once with every row, column, and diagonal summing to 15.",
  prompt:
    "A 3×3 magic square uses the numbers 1–9 exactly once with all rows, columns, and both diagonals " +
    "summing to 15. Count how many 3×3 magic squares appear as subgrids.",
  topics: ["Array", "Matrix", "Math"],
  tags: ["Array", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [4, 3, 8, 4],
    [9, 5, 1, 9],
    [2, 7, 6, 2],
  ],
  defaultOptions: {},
  buildSteps: (input) => magicSteps(input),
  Renderer: MagicRenderer,
};
