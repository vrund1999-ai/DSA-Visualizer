import type { LeetCodeProblem } from "../../types";
import type { PeakData } from "./algorithm";
import { peakSteps } from "./algorithm";
import { CODE } from "./code";
import { PeakRenderer } from "./PeakRenderer";

export const findPeakElementProblem: LeetCodeProblem<
  number[],
  PeakData,
  Record<string, never>
> = {
  id: "find-peak-element",
  number: 162,
  title: "Find Peak Element",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-peak-element/",
  summary: "Find any peak in O(log n) by climbing uphill.",
  prompt:
    "A peak element is strictly greater than its neighbours. Given `nums` where " +
    "nums[-1] and nums[n] are −∞, return the index of any peak in O(log n).",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 65.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 1, 3, 5, 6, 4],
  defaultOptions: {},
  buildSteps: (input) => peakSteps(input),
  Renderer: PeakRenderer,
};
