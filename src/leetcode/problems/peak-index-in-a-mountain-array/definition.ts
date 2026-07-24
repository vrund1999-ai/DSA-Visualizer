import type { LeetCodeProblem } from "../../types";
import type { PeakIndexData } from "./algorithm";
import { peakIndexSteps } from "./algorithm";
import { CODE } from "./code";
import { PeakIndexRenderer } from "./PeakIndexRenderer";

export const peakIndexMountainProblem: LeetCodeProblem<number[], PeakIndexData, Record<string, never>> = {
  id: "peak-index-in-a-mountain-array",
  number: 852,
  title: "Peak Index in a Mountain Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
  summary: "Binary search on the slope to locate a mountain array's peak.",
  prompt:
    "An array arr is a mountain: it strictly increases up to a peak, then strictly " +
    "decreases. Return the index of the peak in O(log n) time.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 48.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 2, 4, 6, 5, 3, 1],
  defaultOptions: {},
  buildSteps: (input) => peakIndexSteps(input),
  Renderer: PeakIndexRenderer,
};
