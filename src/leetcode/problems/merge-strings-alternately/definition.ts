import type { LeetCodeProblem } from "../../types";
import type { MergeStringsData, MergeStringsInput } from "./algorithm";
import { mergeStringsSteps } from "./algorithm";
import { CODE } from "./code";
import { MergeStringsRenderer } from "./MergeStringsRenderer";

export const mergeStringsAlternatelyProblem: LeetCodeProblem<
  MergeStringsInput,
  MergeStringsData,
  Record<string, never>
> = {
  id: "merge-strings-alternately",
  number: 1768,
  title: "Merge Strings Alternately",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/merge-strings-alternately/",
  summary: "Interleave two strings character by character.",
  prompt:
    "Merge two strings by alternating their characters, starting with word1. If " +
    "one string is longer, append its remaining characters to the end.",
  topics: ["Two Pointers", "String"],
  tags: ["Two Pointers", "String"],
  companies: ["Bloomberg"],
  frequency: 52.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + m)", timeWorst: "O(n + m)", space: "O(n + m)" },
  inputSchema: [],
  makeDefaultInput: () => ({ w1: "abc", w2: "pqrs" }),
  defaultOptions: {},
  buildSteps: (input) => mergeStringsSteps(input),
  Renderer: MergeStringsRenderer,
};
