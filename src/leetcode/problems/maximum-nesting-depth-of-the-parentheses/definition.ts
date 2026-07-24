import type { LeetCodeProblem } from "../../types";
import type { NestingData } from "./algorithm";
import { nestingSteps } from "./algorithm";
import { CODE } from "./code";
import { NestingRenderer } from "./NestingRenderer";

export const maxNestingDepthProblem: LeetCodeProblem<string, NestingData, Record<string, never>> = {
  id: "maximum-nesting-depth-of-the-parentheses",
  number: 1614,
  title: "Maximum Nesting Depth of the Parentheses",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
  summary: "Track running bracket depth; the answer is its peak.",
  prompt:
    "Given a valid parentheses string (VPS) with digits and operators, return its " +
    "maximum nesting depth — the deepest level of nested parentheses.",
  topics: ["String", "Stack"],
  tags: ["String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 47.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "(1+(2*3)+((8)/4))+1",
  defaultOptions: {},
  buildSteps: (input) => nestingSteps(input),
  Renderer: NestingRenderer,
};
