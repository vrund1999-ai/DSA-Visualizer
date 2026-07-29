import type { LeetCodeProblem } from "../../types";
import type { HarmoniousData } from "./algorithm";
import { harmoniousSteps } from "./algorithm";
import { CODE } from "./code";
import { HarmoniousRenderer } from "./HarmoniousRenderer";

export const longestHarmoniousSubsequenceProblem: LeetCodeProblem<number[], HarmoniousData, Record<string, never>> = {
  id: "longest-harmonious-subsequence",
  number: 594,
  title: "Longest Harmonious Subsequence",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/longest-harmonious-subsequence/",
  summary: "Count values; the answer is the largest count(v) + count(v+1) over consecutive value pairs.",
  prompt:
    "A harmonious array has max − min exactly 1. Return the length of the longest harmonious " +
    "subsequence of nums.",
  topics: ["Array", "Hash Table", "Sorting", "Sliding Window", "Counting"],
  tags: ["Array", "Hash Table", "Counting"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 2, 2, 5, 2, 3, 7],
  defaultOptions: {},
  buildSteps: (input) => harmoniousSteps(input),
  Renderer: HarmoniousRenderer,
};
