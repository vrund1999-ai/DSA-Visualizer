import type { LeetCodeProblem } from "../../types";
import type { FirstBadData, FirstBadInput } from "./algorithm";
import { firstBadSteps } from "./algorithm";
import { CODE } from "./code";
import { FirstBadRenderer } from "./FirstBadRenderer";

export const firstBadVersionProblem: LeetCodeProblem<
  FirstBadInput,
  FirstBadData,
  Record<string, never>
> = {
  id: "first-bad-version",
  number: 278,
  title: "First Bad Version",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/first-bad-version/",
  summary: "Binary-search the first failing version with fewest checks.",
  prompt:
    "Versions 1..n are in order; after some version all are bad. Given an " +
    "isBadVersion(v) API, find the first bad version with the minimum number of " +
    "calls.",
  topics: ["Binary Search", "Interactive"],
  tags: ["Binary Search", "Interactive"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 12, bad: 8 }),
  defaultOptions: {},
  buildSteps: (input) => firstBadSteps(input),
  Renderer: FirstBadRenderer,
};
