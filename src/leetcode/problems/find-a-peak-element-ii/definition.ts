import type { LeetCodeProblem } from "../../types";
import type { Peak2DData } from "./algorithm";
import { peak2DSteps } from "./algorithm";
import { CODE } from "./code";
import { Peak2DRenderer } from "./Peak2DRenderer";

export const findPeakElementIIProblem: LeetCodeProblem<number[][], Peak2DData, Record<string, never>> = {
  id: "find-a-peak-element-ii",
  number: 1901,
  title: "Find a Peak Element II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-a-peak-element-ii/",
  summary: "Binary-search columns: keep the half holding the larger neighbor of each column's maximum.",
  prompt:
    "A peak in a 2D grid is a cell strictly greater than its up/down/left/right neighbors. Find any " +
    "peak and return its [row, col]. Grid borders are treated as -∞.",
  topics: ["Binary Search", "Matrix", "Divide and Conquer"],
  tags: ["Binary Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m log n)", timeWorst: "O(m log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [10, 20, 15],
    [21, 30, 14],
    [7, 16, 32],
  ],
  defaultOptions: {},
  buildSteps: (input) => peak2DSteps(input),
  Renderer: Peak2DRenderer,
};
