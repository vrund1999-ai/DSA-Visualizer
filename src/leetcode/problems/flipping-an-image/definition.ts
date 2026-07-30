import type { LeetCodeProblem } from "../../types";
import type { FlipData } from "./algorithm";
import { flipSteps } from "./algorithm";
import { CODE } from "./code";
import { FlipRenderer } from "./FlipRenderer";

export const flippingImageProblem: LeetCodeProblem<number[][], FlipData, Record<string, never>> = {
  id: "flipping-an-image",
  number: 832,
  title: "Flipping an Image",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/flipping-an-image/",
  summary: "Reverse each row and invert its bits in a single two-pointer swap-and-flip pass.",
  prompt:
    "Given a binary matrix, flip it horizontally (reverse each row), then invert it (0↔1), and return the " +
    "result.",
  topics: ["Array", "Two Pointers", "Matrix", "Simulation"],
  tags: ["Two Pointers", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => flipSteps(input),
  Renderer: FlipRenderer,
};
