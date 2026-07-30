import type { LeetCodeProblem } from "../../types";
import type { BoolExprData } from "./algorithm";
import { boolExprSteps } from "./algorithm";
import { CODE } from "./code";
import { BoolExprRenderer } from "./BoolExprRenderer";

interface BoolExprInput {
  expr: string;
}

export const parseBoolExprProblem: LeetCodeProblem<BoolExprInput, BoolExprData, Record<string, never>> = {
  id: "parsing-a-boolean-expression",
  number: 1106,
  title: "Parsing A Boolean Expression",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/parsing-a-boolean-expression/",
  summary: "A stack collects tokens; each ')' pops operands back to '(', applies the operator (!, & or |), and pushes the result.",
  prompt:
    "Evaluate a boolean expression built from 't', 'f', '!(x)', '&(e1,e2,…)' and '|(e1,e2,…)'. Return its " +
    "boolean value.",
  topics: ["String", "Stack", "Recursion"],
  tags: ["Stack", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ expr: "!(&(f,t))" }),
  defaultOptions: {},
  buildSteps: (input) => boolExprSteps(input.expr),
  Renderer: BoolExprRenderer,
};
