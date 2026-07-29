import type { LeetCodeProblem } from "../../types";
import type { ArrowsData } from "./algorithm";
import { arrowsSteps } from "./algorithm";
import { CODE } from "./code";
import { ArrowsRenderer } from "./ArrowsRenderer";

export const minArrowsBalloonsProblem: LeetCodeProblem<number[][], ArrowsData, Record<string, never>> = {
  id: "minimum-number-of-arrows-to-burst-balloons",
  number: 452,
  title: "Minimum Number of Arrows to Burst Balloons",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
  summary: "Sort by right edge; shoot at each end-point, reusing the arrow for every overlapping balloon.",
  prompt:
    "Balloons span horizontal intervals [start, end]. An arrow at x bursts every balloon with start ≤ x " +
    "≤ end. Return the minimum arrows needed to burst them all.",
  topics: ["Array", "Greedy", "Sorting"],
  tags: ["Array", "Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ],
  defaultOptions: {},
  buildSteps: (input) => arrowsSteps(input),
  Renderer: ArrowsRenderer,
};
