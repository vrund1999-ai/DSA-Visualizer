import type { LeetCodeProblem } from "../../types";
import type { FractionData } from "./algorithm";
import { fractionSteps } from "./algorithm";
import { CODE } from "./code";
import { FractionRenderer } from "./FractionRenderer";

interface FractionInput {
  numerator: number;
  denominator: number;
}

export const fractionToDecimalProblem: LeetCodeProblem<FractionInput, FractionData, Record<string, never>> = {
  id: "fraction-to-recurring-decimal",
  number: 166,
  title: "Fraction to Recurring Decimal",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/fraction-to-recurring-decimal/",
  summary: "Long division; the first repeated remainder marks the start of the repeating block to parenthesize.",
  prompt:
    "Given a numerator and denominator as integers, return the fraction as a string in decimal form. If " +
    "the fractional part repeats, enclose the repeating block in parentheses.",
  topics: ["Hash Table", "Math", "String"],
  tags: ["Hash Table", "Math"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(period)", timeWorst: "O(den)", space: "O(den)" },
  inputSchema: [],
  makeDefaultInput: () => ({ numerator: 4, denominator: 333 }),
  defaultOptions: {},
  buildSteps: (input) => fractionSteps(input.numerator, input.denominator),
  Renderer: FractionRenderer,
};
