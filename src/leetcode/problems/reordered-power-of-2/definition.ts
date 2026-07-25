import type { LeetCodeProblem } from "../../types";
import type { ReorderedData } from "./algorithm";
import { reorderedSteps } from "./algorithm";
import { CODE } from "./code";
import { ReorderedRenderer } from "./ReorderedRenderer";

export const reorderedPowerOf2Problem: LeetCodeProblem<number, ReorderedData, Record<string, never>> = {
  id: "reordered-power-of-2",
  number: 869,
  title: "Reordered Power of 2",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/reordered-power-of-2/",
  summary: "Compare n's sorted-digit signature against every power of 2.",
  prompt:
    "Given a positive integer n, return true if its digits can be reordered (no leading " +
    "zero) to form a power of 2.",
  topics: ["Math", "Counting", "Enumeration", "Sorting"],
  tags: ["Math", "Counting", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log² n)", timeWorst: "O(log² n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => 46,
  defaultOptions: {},
  buildSteps: (input) => reorderedSteps(input),
  Renderer: ReorderedRenderer,
};
