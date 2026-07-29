import type { LeetCodeProblem } from "../../types";
import type { MaxPointsData } from "./algorithm";
import { maxPointsSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxPointsRenderer } from "./MaxPointsRenderer";

export const maxPointsOnLineProblem: LeetCodeProblem<number[][], MaxPointsData, Record<string, never>> = {
  id: "max-points-on-a-line",
  number: 149,
  title: "Max Points on a Line",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/max-points-on-a-line/",
  summary: "For each anchor, count points by their gcd-reduced slope; the largest slope group is a line.",
  prompt: "Given points on a plane, return the maximum number of points that lie on the same straight line.",
  topics: ["Array", "Hash Table", "Math", "Geometry"],
  tags: ["Array", "Math", "Geometry"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]],
  defaultOptions: {},
  buildSteps: (input) => maxPointsSteps(input),
  Renderer: MaxPointsRenderer,
};
