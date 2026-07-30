import type { LeetCodeProblem } from "../../types";
import type { ValidNumberData } from "./algorithm";
import { validNumberSteps } from "./algorithm";
import { CODE } from "./code";
import { ValidNumberRenderer } from "./ValidNumberRenderer";

interface ValidNumberInput {
  s: string;
}

export const validNumberProblem: LeetCodeProblem<ValidNumberInput, ValidNumberData, Record<string, never>> = {
  id: "valid-number",
  number: 65,
  title: "Valid Number",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/valid-number/",
  summary: "Single-pass validation with digit/dot/exponent flags and positional rules for signs, dots and e/E.",
  prompt:
    "Return whether the string is a valid number: an optional sign, digits with an optional decimal point, " +
    "and an optional exponent (e/E with an optional sign and digits).",
  topics: ["String"],
  tags: ["String", "Finite State Machine"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "-53.5e+93" }),
  defaultOptions: {},
  buildSteps: (input) => validNumberSteps(input.s),
  Renderer: ValidNumberRenderer,
};
