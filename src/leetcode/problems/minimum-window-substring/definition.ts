import type { LeetCodeProblem } from "../../types";
import type { MinWindowData } from "./algorithm";
import { minWindowSteps } from "./algorithm";
import { CODE } from "./code";
import { MinWindowRenderer } from "./MinWindowRenderer";

interface MinWindowInput {
  s: string;
  t: string;
}

export const minimumWindowSubstringProblem: LeetCodeProblem<MinWindowInput, MinWindowData, Record<string, never>> = {
  id: "minimum-window-substring",
  number: 76,
  title: "Minimum Window Substring",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/minimum-window-substring/",
  summary: "Grow the right edge to cover t, then contract the left for the smallest window.",
  prompt:
    "Given strings s and t, return the shortest substring of s that contains every " +
    "character of t (including multiplicity). If none exists, return the empty string.",
  topics: ["Hash Table", "String", "Sliding Window"],
  tags: ["Hash Table", "String", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(|s| + |t|)", timeWorst: "O(|s| + |t|)", space: "O(|t|)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "ADOBECODEBANC", t: "ABC" }),
  defaultOptions: {},
  buildSteps: (input) => minWindowSteps(input.s, input.t),
  Renderer: MinWindowRenderer,
};
