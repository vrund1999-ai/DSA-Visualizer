import type { LeetCodeProblem } from "../../types";
import type { IntToRomanData } from "./algorithm";
import { intToRomanSteps } from "./algorithm";
import { CODE } from "./code";
import { IntToRomanRenderer } from "./IntToRomanRenderer";

export const integerToRomanProblem: LeetCodeProblem<
  number,
  IntToRomanData,
  Record<string, never>
> = {
  id: "integer-to-roman",
  number: 12,
  title: "Integer to Roman",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/integer-to-roman/",
  summary: "Convert an integer to a Roman numeral greedily.",
  prompt:
    "Given an integer, convert it to a Roman numeral using the symbols I, V, X, " +
    "L, C, D, M and the subtractive pairs (IV, IX, XL, XC, CD, CM).",
  topics: ["Hash Table", "Math", "String"],
  tags: ["Hash Table", "Math", "String"],
  companies: ["Bloomberg"],
  frequency: 50.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 1994,
  defaultOptions: {},
  buildSteps: (input) => intToRomanSteps(input),
  Renderer: IntToRomanRenderer,
};
