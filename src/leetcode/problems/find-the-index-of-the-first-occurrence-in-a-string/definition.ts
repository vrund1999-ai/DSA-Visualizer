import type { LeetCodeProblem } from "../../types";
import type { StrStrData, StrStrInput } from "./algorithm";
import { strStrSteps } from "./algorithm";
import { CODE } from "./code";
import { StrStrRenderer } from "./StrStrRenderer";

export const strStrProblem: LeetCodeProblem<
  StrStrInput,
  StrStrData,
  Record<string, never>
> = {
  id: "find-the-index-of-the-first-occurrence-in-a-string",
  number: 28,
  title: "Find the Index of the First Occurrence in a String",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
  summary: "Locate a needle in a haystack (sliding compare).",
  prompt:
    "Given two strings `needle` and `haystack`, return the index of the first " +
    "occurrence of needle in haystack, or -1 if it is not part of haystack.",
  topics: ["Two Pointers", "String", "String Matching"],
  tags: ["Two Pointers", "String", "String Matching"],
  companies: ["Bloomberg"],
  frequency: 58.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·m)", timeWorst: "O(n·m)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ haystack: "sadbutsad", needle: "sad" }),
  defaultOptions: {},
  buildSteps: (input) => strStrSteps(input),
  Renderer: StrStrRenderer,
};
