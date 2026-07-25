import type { LeetCodeProblem } from "../../types";
import type { DiffWaysData } from "./algorithm";
import { diffWaysSteps } from "./algorithm";
import { CODE } from "./code";
import { DiffWaysRenderer } from "./DiffWaysRenderer";

export const differentWaysToAddParenthesesProblem: LeetCodeProblem<string, DiffWaysData, Record<string, never>> = {
  id: "different-ways-to-add-parentheses",
  number: 241,
  title: "Different Ways to Add Parentheses",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/different-ways-to-add-parentheses/",
  summary: "Divide & conquer: split at each operator, combine every left/right pairing.",
  prompt:
    "Given an expression of numbers and + − × operators, return all possible results from " +
    "computing it under every way of adding parentheses.",
  topics: ["Math", "String", "Dynamic Programming", "Recursion", "Memoization"],
  tags: ["Math", "String", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(Catalan(n))", timeWorst: "O(Catalan(n))", space: "O(Catalan(n))" },
  inputSchema: [],
  makeDefaultInput: () => "2*3-4*5",
  defaultOptions: {},
  buildSteps: (input) => diffWaysSteps(input),
  Renderer: DiffWaysRenderer,
};
