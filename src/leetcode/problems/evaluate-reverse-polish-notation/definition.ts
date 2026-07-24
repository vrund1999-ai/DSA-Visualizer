import type { LeetCodeProblem } from "../../types";
import type { RPNData } from "./algorithm";
import { rpnSteps } from "./algorithm";
import { CODE } from "./code";
import { RPNRenderer } from "./RPNRenderer";

export const evalRPNProblem: LeetCodeProblem<string[], RPNData, Record<string, never>> = {
  id: "evaluate-reverse-polish-notation",
  number: 150,
  title: "Evaluate Reverse Polish Notation",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
  summary: "Evaluate a postfix expression with an operand stack.",
  prompt:
    "Evaluate an arithmetic expression in Reverse Polish Notation. Valid operators are " +
    "+, -, *, and /; division truncates toward zero. Return the integer result.",
  topics: ["Array", "Math", "Stack"],
  tags: ["Array", "Math", "Stack"],
  companies: ["Bloomberg"],
  frequency: 47.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ["2", "1", "+", "3", "*"],
  defaultOptions: {},
  buildSteps: (input) => rpnSteps(input),
  Renderer: RPNRenderer,
};
