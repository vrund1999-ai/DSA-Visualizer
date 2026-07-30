import type { LeetCodeProblem } from "../../types";
import type { ValidParenData } from "./algorithm";
import { validParenSteps } from "./algorithm";
import { CODE } from "./code";
import { ValidParenRenderer } from "./ValidParenRenderer";

interface ValidParenInput {
  s: string;
  locked: string;
}

export const canBeValidParenProblem: LeetCodeProblem<ValidParenInput, ValidParenData, Record<string, never>> = {
  id: "check-if-a-parentheses-string-can-be-valid",
  number: 2116,
  title: "Check if a Parentheses String Can Be Valid",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/",
  summary: "Two greedy passes: unlocked chars are wildcards, so the running balance must stay non-negative both ways.",
  prompt:
    "A parentheses string where locked[i]='1' means s[i] is fixed and '0' means it can be changed. Return " +
    "whether s can be made a valid parentheses string.",
  topics: ["String", "Stack", "Greedy"],
  tags: ["Greedy", "Stack"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "))()))", locked: "010100" }),
  defaultOptions: {},
  buildSteps: (input) => validParenSteps(input.s, input.locked),
  Renderer: ValidParenRenderer,
};
