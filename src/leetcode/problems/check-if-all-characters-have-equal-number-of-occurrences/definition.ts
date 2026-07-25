import type { LeetCodeProblem } from "../../types";
import type { EqualOccData } from "./algorithm";
import { equalOccSteps } from "./algorithm";
import { CODE } from "./code";
import { EqualOccRenderer } from "./EqualOccRenderer";

export const checkEqualOccurrencesProblem: LeetCodeProblem<string, EqualOccData, Record<string, never>> = {
  id: "check-if-all-characters-have-equal-number-of-occurrences",
  number: 1941,
  title: "Check if All Characters Have Equal Number of Occurrences",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/",
  summary: "Tally characters, then confirm every distinct count equals the first.",
  prompt:
    "Given a string s, return true if every character in s appears the same number of times " +
    "(s is 'good'), and false otherwise.",
  topics: ["Hash Table", "String", "Counting"],
  tags: ["Hash Table", "String", "Counting"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "abacbc",
  defaultOptions: {},
  buildSteps: (input) => equalOccSteps(input),
  Renderer: EqualOccRenderer,
};
