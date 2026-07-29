import type { LeetCodeProblem } from "../../types";
import type { MoveBallsData } from "./algorithm";
import { moveBallsSteps } from "./algorithm";
import { CODE } from "./code";
import { MoveBallsRenderer } from "./MoveBallsRenderer";

export const moveAllBallsToEachBoxProblem: LeetCodeProblem<string, MoveBallsData, Record<string, never>> = {
  id: "minimum-number-of-operations-to-move-all-balls-to-each-box",
  number: 1769,
  title: "Minimum Number of Operations to Move All Balls to Each Box",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/",
  summary: "Two directional sweeps accumulate the distance cost from balls on each side.",
  prompt:
    "boxes[i] = '1' means box i has a ball. For each box, return the minimum number of single-step " +
    "moves to bring all balls into that box.",
  topics: ["Array", "Prefix Sum"],
  tags: ["Array", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "001011",
  defaultOptions: {},
  buildSteps: (input) => moveBallsSteps(input),
  Renderer: MoveBallsRenderer,
};
