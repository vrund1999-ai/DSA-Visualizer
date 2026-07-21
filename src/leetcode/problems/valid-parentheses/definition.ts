import type { LeetCodeProblem } from "../../types";
import type { ParenData } from "./algorithm";
import { validParenSteps } from "./algorithm";
import { CODE } from "./code";
import { StackRenderer } from "./StackRenderer";

export const validParenthesesProblem: LeetCodeProblem<
  string,
  ParenData,
  Record<string, never>
> = {
  id: "valid-parentheses",
  number: 20,
  title: "Valid Parentheses",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/valid-parentheses/",
  summary: "Check bracket matching with a stack.",
  prompt:
    "Given a string `s` containing just the characters '()[]{}', determine if " +
    "the input is valid: brackets must be closed by the same type in the " +
    "correct order.",
  topics: ["String", "Stack"],
  tags: ["String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 84.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "([{}])[]",
  defaultOptions: {},
  buildSteps: (input) => validParenSteps(input),
  Renderer: StackRenderer,
};
