import type { LeetCodeProblem } from "../../types";
import type { Spiral2Data } from "./algorithm";
import { spiral2Steps } from "./algorithm";
import { CODE } from "./code";
import { Spiral2Renderer } from "./Spiral2Renderer";

export const spiralMatrixIIProblem: LeetCodeProblem<number, Spiral2Data, Record<string, never>> = {
  id: "spiral-matrix-ii",
  number: 59,
  title: "Spiral Matrix II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/spiral-matrix-ii/",
  summary: "Fill along four shrinking boundaries — top, right, bottom, left — moving each inward per loop.",
  prompt: "Given a positive integer n, generate an n×n matrix filled with the elements from 1 to n² in spiral order.",
  topics: ["Array", "Matrix", "Simulation"],
  tags: ["Array", "Matrix", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => 4,
  defaultOptions: {},
  buildSteps: (input) => spiral2Steps(input),
  Renderer: Spiral2Renderer,
};
