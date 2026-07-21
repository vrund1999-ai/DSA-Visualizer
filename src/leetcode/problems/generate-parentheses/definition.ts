import type { LeetCodeProblem } from "../../types";
import type { GenParenData } from "./algorithm";
import { genParenSteps } from "./algorithm";
import { CODE } from "./code";
import { GenParenRenderer } from "./GenParenRenderer";

export const generateParenthesesProblem: LeetCodeProblem<
  number,
  GenParenData,
  Record<string, never>
> = {
  id: "generate-parentheses",
  number: 22,
  title: "Generate Parentheses",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/generate-parentheses/",
  summary: "All well-formed parentheses combinations via backtracking.",
  prompt:
    "Given `n` pairs of parentheses, generate all combinations of well-formed " +
    "parentheses.",
  topics: ["String", "Dynamic Programming", "Backtracking"],
  tags: ["String", "Dynamic Programming", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 66.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(4ⁿ/√n)", timeWorst: "O(4ⁿ/√n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 3,
  defaultOptions: {},
  buildSteps: (input) => genParenSteps(input),
  Renderer: GenParenRenderer,
};
