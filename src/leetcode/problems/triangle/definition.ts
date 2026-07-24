import type { LeetCodeProblem } from "../../types";
import type { TriangleData } from "./algorithm";
import { triangleSteps } from "./algorithm";
import { CODE } from "./code";
import { TriangleRenderer } from "./TriangleRenderer";

export const triangleProblem: LeetCodeProblem<number[][], TriangleData, Record<string, never>> = {
  id: "triangle",
  number: 120,
  title: "Triangle",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/triangle/",
  summary: "Bottom-up DP folding each row into the running best totals below it.",
  prompt:
    "Given a triangle array, return the minimum path sum from top to bottom. From index " +
    "j in a row you may move to index j or j+1 in the next row.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 45.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]],
  defaultOptions: {},
  buildSteps: (input) => triangleSteps(input),
  Renderer: TriangleRenderer,
};
