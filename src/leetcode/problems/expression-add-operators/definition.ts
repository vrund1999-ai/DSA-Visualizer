import type { LeetCodeProblem } from "../../types";
import type { ExprData } from "./algorithm";
import { exprSteps } from "./algorithm";
import { CODE } from "./code";
import { ExprRenderer } from "./ExprRenderer";

interface ExprInput {
  num: string;
  target: number;
}

export const expressionAddOperatorsProblem: LeetCodeProblem<ExprInput, ExprData, Record<string, never>> = {
  id: "expression-add-operators",
  number: 282,
  title: "Expression Add Operators",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/expression-add-operators/",
  summary: "Backtrack over every split, handling × by undoing the previous operand so it binds tighter.",
  prompt:
    "Given a digit string num and a target, insert the binary operators +, − and × between the digits (in " +
    "any way, no leading-zero operands) so the expression evaluates to target. Return all such expressions.",
  topics: ["Math", "String", "Backtracking"],
  tags: ["Backtracking", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(4ⁿ)", timeWorst: "O(4ⁿ)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ num: "123", target: 6 }),
  defaultOptions: {},
  buildSteps: (input) => exprSteps(input.num, input.target),
  Renderer: ExprRenderer,
};
