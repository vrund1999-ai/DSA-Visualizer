import type { LeetCodeProblem } from "../../types";
import type { ClumsyData } from "./algorithm";
import { clumsySteps } from "./algorithm";
import { CODE } from "./code";
import { ClumsyRenderer } from "./ClumsyRenderer";

interface ClumsyInput {
  n: number;
}

export const clumsyFactorialProblem: LeetCodeProblem<ClumsyInput, ClumsyData, Record<string, never>> = {
  id: "clumsy-factorial",
  number: 1006,
  title: "Clumsy Factorial",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/clumsy-factorial/",
  summary: "Apply rotating *, /, +, - to n..1; × and ÷ update the stack top immediately (precedence), and the answer is the stack's sum.",
  prompt:
    "The clumsy factorial replaces the multiplications in n! with a fixed rotation of ×, ÷, +, − (in that " +
    "order), respecting normal operator precedence. Return its value.",
  topics: ["Math", "Stack", "Simulation"],
  tags: ["Stack", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 10 }),
  defaultOptions: {},
  buildSteps: (input) => clumsySteps(input.n),
  Renderer: ClumsyRenderer,
};
