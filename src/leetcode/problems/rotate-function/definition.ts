import type { LeetCodeProblem } from "../../types";
import type { RotateData } from "./algorithm";
import { rotateSteps } from "./algorithm";
import { CODE } from "./code";
import { RotateRenderer } from "./RotateRenderer";

export const rotateFunctionProblem: LeetCodeProblem<number[], RotateData, Record<string, never>> = {
  id: "rotate-function",
  number: 396,
  title: "Rotate Function",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/rotate-function/",
  summary: "Each rotation shifts every weight up by one except the wrapped element, giving an O(1) recurrence.",
  prompt:
    "For array nums of length n, F(k) = Σ i·(nums rotated clockwise by k)[i]. Return the maximum value " +
    "of F(0), F(1), …, F(n-1).",
  topics: ["Array", "Math", "Dynamic Programming"],
  tags: ["Array", "Math"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 3, 2, 6],
  defaultOptions: {},
  buildSteps: (input) => rotateSteps(input),
  Renderer: RotateRenderer,
};
