import type { LeetCodeProblem } from "../../types";
import type { BasicCalcData } from "./algorithm";
import { basicCalcSteps } from "./algorithm";
import { CODE } from "./code";
import { BasicCalcRenderer } from "./BasicCalcRenderer";

export const basicCalculatorProblem: LeetCodeProblem<string, BasicCalcData, Record<string, never>> = {
  id: "basic-calculator",
  number: 224,
  title: "Basic Calculator",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/basic-calculator/",
  summary: "Running result + sign, with a stack to save context across parentheses.",
  prompt:
    "Evaluate a string expression containing non-negative integers, '+', '−', '(', ')' " +
    "and spaces. There is no × or ÷; parentheses can nest.",
  topics: ["Math", "String", "Stack", "Recursion"],
  tags: ["Math", "String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "(1+(4+5+2)-3)+(6+8)",
  defaultOptions: {},
  buildSteps: (input) => basicCalcSteps(input),
  Renderer: BasicCalcRenderer,
};
