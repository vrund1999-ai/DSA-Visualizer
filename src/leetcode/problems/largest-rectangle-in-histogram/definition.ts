import type { LeetCodeProblem } from "../../types";
import type { HistogramData } from "./algorithm";
import { histogramSteps } from "./algorithm";
import { CODE } from "./code";
import { HistogramRenderer } from "./HistogramRenderer";

export const largestRectangleProblem: LeetCodeProblem<
  number[],
  HistogramData,
  Record<string, never>
> = {
  id: "largest-rectangle-in-histogram",
  number: 84,
  title: "Largest Rectangle in Histogram",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
  summary: "Biggest bar-bounded rectangle via a monotonic stack.",
  prompt:
    "Given an array `heights` of bar heights (each width 1), return the area of " +
    "the largest rectangle that fits within the histogram.",
  topics: ["Array", "Stack", "Monotonic Stack"],
  tags: ["Array", "Stack", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 54.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 1, 5, 6, 2, 3],
  defaultOptions: {},
  buildSteps: (input) => histogramSteps(input),
  Renderer: HistogramRenderer,
};
