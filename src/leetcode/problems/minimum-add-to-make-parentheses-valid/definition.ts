import type { LeetCodeProblem } from "../../types";
import type { MinAddData } from "./algorithm";
import { minAddSteps } from "./algorithm";
import { CODE } from "./code";
import { MinAddRenderer } from "./MinAddRenderer";

export const minimumAddToMakeParenthesesValidProblem: LeetCodeProblem<string, MinAddData, Record<string, never>> = {
  id: "minimum-add-to-make-parentheses-valid",
  number: 921,
  title: "Minimum Add to Make Parentheses Valid",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
  summary: "Sweep once, cancelling ')' against open '('; count strays plus leftover opens.",
  prompt:
    "Given a string of '(' and ')', return the minimum number of parentheses to insert so " +
    "that the string is balanced.",
  topics: ["String", "Stack", "Greedy"],
  tags: ["String", "Stack", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "())(((",
  defaultOptions: {},
  buildSteps: (input) => minAddSteps(input),
  Renderer: MinAddRenderer,
};
