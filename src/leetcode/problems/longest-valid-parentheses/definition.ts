import type { LeetCodeProblem } from "../../types";
import type { LongestValidData } from "./algorithm";
import { longestValidSteps } from "./algorithm";
import { CODE } from "./code";
import { LongestValidRenderer } from "./LongestValidRenderer";

export const longestValidParenthesesProblem: LeetCodeProblem<string, LongestValidData, Record<string, never>> = {
  id: "longest-valid-parentheses",
  number: 32,
  title: "Longest Valid Parentheses",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/longest-valid-parentheses/",
  summary: "Index stack with a −1 base measures the longest well-formed run.",
  prompt:
    "Given a string of '(' and ')', return the length of the longest substring that is " +
    "a well-formed (valid) parentheses sequence.",
  topics: ["String", "Dynamic Programming", "Stack"],
  tags: ["String", "Dynamic Programming", "Stack"],
  companies: ["Bloomberg"],
  frequency: 42.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "(()())((",
  defaultOptions: {},
  buildSteps: (input) => longestValidSteps(input),
  Renderer: LongestValidRenderer,
};
