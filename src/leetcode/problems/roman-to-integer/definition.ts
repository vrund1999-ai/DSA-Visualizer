import type { LeetCodeProblem } from "../../types";
import type { RomanData } from "./algorithm";
import { romanSteps } from "./algorithm";
import { CODE } from "./code";
import { RomanRenderer } from "./RomanRenderer";

export const romanToIntegerProblem: LeetCodeProblem<
  string,
  RomanData,
  Record<string, never>
> = {
  id: "roman-to-integer",
  number: 13,
  title: "Roman to Integer",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/roman-to-integer/",
  summary: "Convert a Roman numeral to an integer.",
  prompt:
    "Given a Roman numeral, convert it to an integer. Symbols usually add, but a " +
    "smaller symbol before a larger one is subtracted (e.g. IV = 4, IX = 9).",
  topics: ["Hash Table", "Math", "String"],
  tags: ["Hash Table", "Math", "String"],
  companies: ["Bloomberg"],
  frequency: 72.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "MCMXCIV",
  defaultOptions: {},
  buildSteps: (input) => romanSteps(input),
  Renderer: RomanRenderer,
};
