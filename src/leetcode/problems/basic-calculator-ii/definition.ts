import type { LeetCodeProblem } from "../../types";
import type { CalcData } from "./algorithm";
import { calcSteps } from "./algorithm";
import { CODE } from "./code";
import { CalcRenderer } from "./CalcRenderer";

export const basicCalculatorIIProblem: LeetCodeProblem<string, CalcData, Record<string, never>> = {
  id: "basic-calculator-ii",
  number: 227,
  title: "Basic Calculator II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/basic-calculator-ii/",
  summary: "Stack evaluation; × and ÷ resolve immediately, + and − defer to a final sum.",
  prompt:
    "Evaluate a string expression of non-negative integers with +, −, ×, ÷ and spaces " +
    "(no parentheses), respecting operator precedence. Integer division truncates toward " +
    "zero.",
  topics: ["Math", "String", "Stack"],
  tags: ["Math", "String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "3+2*2-6/2",
  defaultOptions: {},
  buildSteps: (input) => calcSteps(input),
  Renderer: CalcRenderer,
};
