import type { LeetCodeProblem } from "../../types";
import type { ValidParenData } from "./algorithm";
import { validParenSteps } from "./algorithm";
import { CODE } from "./code";
import { ValidParenRenderer } from "./ValidParenRenderer";

export const validParenthesisStringProblem: LeetCodeProblem<string, ValidParenData, Record<string, never>> = {
  id: "valid-parenthesis-string",
  number: 678,
  title: "Valid Parenthesis String",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/valid-parenthesis-string/",
  summary: "Track a range of possible open-paren counts as '*' can be (, ), or empty.",
  prompt:
    "Given a string of '(', ')' and '*', where '*' can be treated as '(', ')' or an empty " +
    "string, return whether the string can be a valid parentheses expression.",
  topics: ["String", "Dynamic Programming", "Stack", "Greedy"],
  tags: ["String", "Stack", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "(*))",
  defaultOptions: {},
  buildSteps: (input) => validParenSteps(input),
  Renderer: ValidParenRenderer,
};
