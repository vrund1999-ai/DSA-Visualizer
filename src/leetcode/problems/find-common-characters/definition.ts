import type { LeetCodeProblem } from "../../types";
import type { CommonCharsData } from "./algorithm";
import { commonCharsSteps } from "./algorithm";
import { CODE } from "./code";
import { CommonCharsRenderer } from "./CommonCharsRenderer";

export const findCommonCharactersProblem: LeetCodeProblem<string[], CommonCharsData, Record<string, never>> = {
  id: "find-common-characters",
  number: 1002,
  title: "Find Common Characters",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-common-characters/",
  summary: "Take the element-wise minimum of each word's letter counts; the surviving counts are the answer.",
  prompt:
    "Given an array of words, return all characters that appear in every word (including duplicates), " +
    "in any order.",
  topics: ["Array", "Hash Table", "String"],
  tags: ["Array", "Hash Table", "String"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(Σ|word|)", timeWorst: "O(Σ|word|)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ["bella", "label", "roller"],
  defaultOptions: {},
  buildSteps: (input) => commonCharsSteps(input),
  Renderer: CommonCharsRenderer,
};
