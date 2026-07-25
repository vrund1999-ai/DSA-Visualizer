import type { LeetCodeProblem } from "../../types";
import type { ValidWordData } from "./algorithm";
import { validWordSteps } from "./algorithm";
import { CODE } from "./code";
import { ValidWordRenderer } from "./ValidWordRenderer";

export const validWordProblem: LeetCodeProblem<string, ValidWordData, Record<string, never>> = {
  id: "valid-word",
  number: 3136,
  title: "Valid Word",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/valid-word/",
  summary: "Check length ≥ 3, only letters/digits, and at least one vowel and one consonant.",
  prompt:
    "A word is valid if it has at least 3 characters, contains only digits and English letters, " +
    "and includes at least one vowel and one consonant. Return whether the given word is valid.",
  topics: ["String"],
  tags: ["String"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "234Adas",
  defaultOptions: {},
  buildSteps: (input) => validWordSteps(input),
  Renderer: ValidWordRenderer,
};
