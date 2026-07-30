import type { LeetCodeProblem } from "../../types";
import type { ParenScoreData } from "./algorithm";
import { parenScoreSteps } from "./algorithm";
import { CODE } from "./code";
import { ParenScoreRenderer } from "./ParenScoreRenderer";

export const scoreOfParenthesesProblem: LeetCodeProblem<string, ParenScoreData, Record<string, never>> = {
  id: "score-of-parentheses",
  number: 856,
  title: "Score of Parentheses",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/score-of-parentheses/",
  summary: "A depth-indexed stack folds each closed pair up: () scores 1, (A) doubles A, and siblings add.",
  prompt:
    "Given a balanced parentheses string, compute its score where () = 1, AB = A + B (concatenation), and " +
    "(A) = 2 × A.",
  topics: ["String", "Stack"],
  tags: ["Stack", "String"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "(()(()))",
  defaultOptions: {},
  buildSteps: (input) => parenScoreSteps(input),
  Renderer: ParenScoreRenderer,
};
