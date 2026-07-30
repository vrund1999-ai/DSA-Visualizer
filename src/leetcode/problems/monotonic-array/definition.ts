import type { LeetCodeProblem } from "../../types";
import type { MonotonicData } from "./algorithm";
import { monotonicSteps } from "./algorithm";
import { CODE } from "./code";
import { MonotonicRenderer } from "./MonotonicRenderer";

interface MonotonicInput {
  nums: number[];
}

export const monotonicArrayProblem: LeetCodeProblem<MonotonicInput, MonotonicData, Record<string, never>> = {
  id: "monotonic-array",
  number: 896,
  title: "Monotonic Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/monotonic-array/",
  summary: "Track two flags — still non-decreasing, still non-increasing — and clear whichever an adjacent pair violates.",
  prompt: "Return true if the array is monotonic (entirely non-increasing or entirely non-decreasing).",
  topics: ["Array"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 2, 3] }),
  defaultOptions: {},
  buildSteps: (input) => monotonicSteps(input.nums),
  Renderer: MonotonicRenderer,
};
