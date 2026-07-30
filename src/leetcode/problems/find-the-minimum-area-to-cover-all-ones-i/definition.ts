import type { LeetCodeProblem } from "../../types";
import type { MinAreaData } from "./algorithm";
import { minAreaSteps } from "./algorithm";
import { CODE } from "./code";
import { MinAreaRenderer } from "./MinAreaRenderer";

export const minimumAreaCoverOnesProblem: LeetCodeProblem<number[][], MinAreaData, Record<string, never>> = {
  id: "find-the-minimum-area-to-cover-all-ones-i",
  number: 3195,
  title: "Find the Minimum Area to Cover All Ones I",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/",
  summary: "Track the extreme rows and columns containing a 1; their bounding box is the minimum covering area.",
  prompt:
    "Given a binary grid, return the minimum area of an axis-aligned rectangle that contains all the 1s in " +
    "the grid.",
  topics: ["Array", "Matrix"],
  tags: ["Array", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(RC)", timeWorst: "O(RC)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 1, 0],
    [1, 0, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => minAreaSteps(input),
  Renderer: MinAreaRenderer,
};
