import type { LeetCodeProblem } from "../../types";
import type { EqualFreqData } from "./algorithm";
import { equalFreqSteps } from "./algorithm";
import { CODE } from "./code";
import { EqualFreqRenderer } from "./EqualFreqRenderer";

export const removeLetterToEqualizeFrequencyProblem: LeetCodeProblem<string, EqualFreqData, Record<string, never>> = {
  id: "remove-letter-to-equalize-frequency",
  number: 2423,
  title: "Remove Letter To Equalize Frequency",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/remove-letter-to-equalize-frequency/",
  summary: "Trial-remove one of each distinct letter; check the remaining counts are all equal.",
  prompt:
    "Given a 0-indexed string word of lowercase letters, decide whether deleting exactly one " +
    "character can make every remaining letter appear the same number of times.",
  topics: ["Hash Table", "String", "Counting"],
  tags: ["Hash Table", "String", "Counting"],
  companies: ["Bloomberg"],
  frequency: 58.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(26·n)", timeWorst: "O(26·n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "aazz",
  defaultOptions: {},
  buildSteps: (input) => equalFreqSteps(input),
  Renderer: EqualFreqRenderer,
};
