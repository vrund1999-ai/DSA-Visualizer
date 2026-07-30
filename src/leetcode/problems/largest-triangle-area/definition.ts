import type { LeetCodeProblem } from "../../types";
import type { TriangleData } from "./algorithm";
import { triangleSteps } from "./algorithm";
import { CODE } from "./code";
import { TriangleRenderer } from "./TriangleRenderer";

export const largestTriangleAreaProblem: LeetCodeProblem<number[][], TriangleData, Record<string, never>> = {
  id: "largest-triangle-area",
  number: 812,
  title: "Largest Triangle Area",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/largest-triangle-area/",
  summary: "For every triple of points, the shoelace cross product gives the triangle area; keep the largest.",
  prompt: "Given points on a plane, return the area of the largest triangle that can be formed by any three of them.",
  topics: ["Array", "Math", "Geometry"],
  tags: ["Geometry", "Math"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n³)", timeWorst: "O(n³)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ],
  defaultOptions: {},
  buildSteps: (input) => triangleSteps(input),
  Renderer: TriangleRenderer,
};
