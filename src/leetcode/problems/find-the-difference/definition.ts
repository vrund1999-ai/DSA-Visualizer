import type { LeetCodeProblem } from "../../types";
import type { FindDiffData } from "./algorithm";
import { findDiffSteps } from "./algorithm";
import { CODE } from "./code";
import { FindDiffRenderer } from "./FindDiffRenderer";

interface FindDiffInput {
  s: string;
  t: string;
}

export const findTheDifferenceProblem: LeetCodeProblem<FindDiffInput, FindDiffData, Record<string, never>> = {
  id: "find-the-difference",
  number: 389,
  title: "Find the Difference",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-the-difference/",
  summary: "XOR all character codes; matching pairs cancel, leaving the added letter.",
  prompt:
    "String t is string s with its characters shuffled and one extra character added. " +
    "Return the character that was added.",
  topics: ["Hash Table", "String", "Bit Manipulation", "Sorting"],
  tags: ["Hash Table", "String", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "abcd", t: "abcde" }),
  defaultOptions: {},
  buildSteps: (input) => findDiffSteps(input.s, input.t),
  Renderer: FindDiffRenderer,
};
