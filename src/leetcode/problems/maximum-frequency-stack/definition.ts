import type { LeetCodeProblem } from "../../types";
import type { FreqOp, FreqStackData } from "./algorithm";
import { freqStackSteps } from "./algorithm";
import { CODE } from "./code";
import { FreqStackRenderer } from "./FreqStackRenderer";

export const maximumFrequencyStackProblem: LeetCodeProblem<FreqOp[], FreqStackData, Record<string, never>> = {
  id: "maximum-frequency-stack",
  number: 895,
  title: "Maximum Frequency Stack",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/maximum-frequency-stack/",
  summary: "One stack per frequency level; pop always takes the top of the highest non-empty level.",
  prompt:
    "Design a stack-like structure where pop() removes and returns the most frequent element, breaking " +
    "ties in favor of the element pushed most recently.",
  topics: ["Hash Table", "Stack", "Design", "Ordered Set"],
  tags: ["Stack", "Design", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) per op", timeWorst: "O(1) per op", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    { op: "push", val: 5 },
    { op: "push", val: 7 },
    { op: "push", val: 5 },
    { op: "push", val: 7 },
    { op: "push", val: 4 },
    { op: "push", val: 5 },
    { op: "pop" },
    { op: "pop" },
    { op: "pop" },
    { op: "pop" },
  ],
  defaultOptions: {},
  buildSteps: (input) => freqStackSteps(input),
  Renderer: FreqStackRenderer,
};
