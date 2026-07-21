import type { LeetCodeProblem } from "../../types";
import type { RotateData } from "./algorithm";
import { rotateSteps } from "./algorithm";
import { CODE } from "./code";
import { RotateRenderer } from "./RotateRenderer";

export const rotateImageProblem: LeetCodeProblem<
  number[][],
  RotateData,
  Record<string, never>
> = {
  id: "rotate-image",
  number: 48,
  title: "Rotate Image",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/rotate-image/",
  summary: "Rotate an n×n matrix 90° clockwise in-place.",
  prompt:
    "You are given an n×n 2D `matrix` representing an image. Rotate it 90 " +
    "degrees clockwise, in-place (do not allocate another matrix).",
  topics: ["Array", "Math", "Matrix"],
  tags: ["Array", "Math", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 67,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  defaultOptions: {},
  buildSteps: (input) => rotateSteps(input),
  Renderer: RotateRenderer,
};
