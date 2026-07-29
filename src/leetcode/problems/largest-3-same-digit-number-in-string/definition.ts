import type { LeetCodeProblem } from "../../types";
import type { GoodIntData } from "./algorithm";
import { goodIntSteps } from "./algorithm";
import { CODE } from "./code";
import { GoodIntRenderer } from "./GoodIntRenderer";

export const largest3SameDigitProblem: LeetCodeProblem<string, GoodIntData, Record<string, never>> = {
  id: "largest-3-same-digit-number-in-string",
  number: 2264,
  title: "Largest 3-Same-Digit Number in String",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/largest-3-same-digit-number-in-string/",
  summary: "Slide a length-3 window; keep the largest run of three identical consecutive digits.",
  prompt:
    "A 'good' integer is a substring of length 3 with all identical digits. Return the largest good " +
    "integer in num as a string, or '' if none exists.",
  topics: ["String"],
  tags: ["String"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "6777133339",
  defaultOptions: {},
  buildSteps: (input) => goodIntSteps(input),
  Renderer: GoodIntRenderer,
};
