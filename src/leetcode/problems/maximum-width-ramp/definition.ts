import type { LeetCodeProblem } from "../../types";
import type { WidthRampData } from "./algorithm";
import { widthRampSteps } from "./algorithm";
import { CODE } from "./code";
import { WidthRampRenderer } from "./WidthRampRenderer";

export const maximumWidthRampProblem: LeetCodeProblem<number[], WidthRampData, Record<string, never>> = {
  id: "maximum-width-ramp",
  number: 962,
  title: "Maximum Width Ramp",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-width-ramp/",
  summary: "Decreasing candidate-start stack, then scan from the right for the widest ramp.",
  prompt:
    "A ramp is a pair (i, j) with i < j and nums[i] ≤ nums[j]. Return the maximum width " +
    "j − i over all ramps, or 0 if none.",
  topics: ["Array", "Stack", "Monotonic Stack"],
  tags: ["Array", "Stack", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [6, 0, 8, 2, 1, 5],
  defaultOptions: {},
  buildSteps: (input) => widthRampSteps(input),
  Renderer: WidthRampRenderer,
};
