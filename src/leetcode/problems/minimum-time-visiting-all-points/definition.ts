import type { LeetCodeProblem } from "../../types";
import type { VisitPointsData } from "./algorithm";
import { visitPointsSteps } from "./algorithm";
import { CODE } from "./code";
import { VisitPointsRenderer } from "./VisitPointsRenderer";

export const minimumTimeVisitingAllPointsProblem: LeetCodeProblem<number[][], VisitPointsData, Record<string, never>> = {
  id: "minimum-time-visiting-all-points",
  number: 1266,
  title: "Minimum Time Visiting All Points",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/minimum-time-visiting-all-points/",
  summary: "Sum the Chebyshev distances max(|dx|, |dy|) between consecutive points.",
  prompt:
    "Given points visited in order on a grid, return the minimum time (in seconds) to visit them all, " +
    "where each second you may move one unit vertically, horizontally, or diagonally.",
  topics: ["Array", "Math", "Geometry"],
  tags: ["Array", "Math", "Geometry"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [[1, 1], [3, 4], [-1, 0]],
  defaultOptions: {},
  buildSteps: (input) => visitPointsSteps(input),
  Renderer: VisitPointsRenderer,
};
