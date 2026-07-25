import type { LeetCodeProblem } from "../../types";
import type { ReverseParenData } from "./algorithm";
import { reverseParenSteps } from "./algorithm";
import { CODE } from "./code";
import { ReverseParenRenderer } from "./ReverseParenRenderer";

export const reverseSubstringsBetweenParenthesesProblem: LeetCodeProblem<string, ReverseParenData, Record<string, never>> = {
  id: "reverse-substrings-between-each-pair-of-parentheses",
  number: 1190,
  title: "Reverse Substrings Between Each Pair of Parentheses",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/",
  summary: "A stack of segments: '(' pushes, ')' pops & reverses & merges into the parent segment.",
  prompt:
    "Given a string with lowercase letters and balanced parentheses, reverse the contents of " +
    "each innermost pair repeatedly, and return the result with all parentheses removed.",
  topics: ["String", "Stack"],
  tags: ["String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "(u(love)i)",
  defaultOptions: {},
  buildSteps: (input) => reverseParenSteps(input),
  Renderer: ReverseParenRenderer,
};
