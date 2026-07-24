import type { LeetCodeProblem } from "../../types";
import type { MinStepsData } from "./algorithm";
import { minStepsSteps } from "./algorithm";
import { CODE } from "./code";
import { MinStepsRenderer } from "./MinStepsRenderer";

interface MinStepsInput {
  s: string;
  t: string;
}

export const minStepsAnagramProblem: LeetCodeProblem<MinStepsInput, MinStepsData, Record<string, never>> = {
  id: "minimum-number-of-steps-to-make-two-strings-anagram",
  number: 1347,
  title: "Minimum Number of Steps to Make Two Strings Anagram",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",
  summary: "Frequency difference; the positive surplus counts required replacements.",
  prompt:
    "You may replace any character of t with another in one step. Return the minimum " +
    "number of steps to make t an anagram of s (s and t have equal length).",
  topics: ["Hash Table", "String", "Counting"],
  tags: ["Hash Table", "String", "Counting"],
  companies: ["Bloomberg"],
  frequency: 46.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "leetcode", t: "practice" }),
  defaultOptions: {},
  buildSteps: (input) => minStepsSteps(input.s, input.t),
  Renderer: MinStepsRenderer,
};
