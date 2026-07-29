import type { LeetCodeProblem } from "../../types";
import type { FinalValueData } from "./algorithm";
import { finalValueSteps } from "./algorithm";
import { CODE } from "./code";
import { FinalValueRenderer } from "./FinalValueRenderer";

export const finalValueOfVariableProblem: LeetCodeProblem<string[], FinalValueData, Record<string, never>> = {
  id: "final-value-of-variable-after-performing-operations",
  number: 2011,
  title: "Final Value of Variable After Performing Operations",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/final-value-of-variable-after-performing-operations/",
  summary: "Each operation containing '+' adds 1, otherwise subtracts 1 — accumulate the running value.",
  prompt:
    "Starting with x = 0, apply the operations ('++X', 'X++', '--X', 'X--') in order and return the " +
    "final value of x.",
  topics: ["Array", "String", "Simulation"],
  tags: ["Array", "String", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ["--X", "X++", "X++", "--X", "++X"],
  defaultOptions: {},
  buildSteps: (input) => finalValueSteps(input),
  Renderer: FinalValueRenderer,
};
