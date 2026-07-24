import type { LeetCodeProblem } from "../../types";
import type { MinRemoveData } from "./algorithm";
import { minRemoveSteps } from "./algorithm";
import { CODE } from "./code";
import { MinRemoveRenderer } from "./MinRemoveRenderer";

export const minRemoveValidParensProblem: LeetCodeProblem<
  string,
  MinRemoveData,
  Record<string, never>
> = {
  id: "minimum-remove-to-make-valid-parentheses",
  number: 1249,
  title: "Minimum Remove to Make Valid Parentheses",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
  summary: "Delete the fewest parentheses to make the string valid (stack).",
  prompt:
    "Given a string `s` of '(' , ')' and lowercase letters, remove the minimum " +
    "number of parentheses so the result is valid, and return any such result.",
  topics: ["String", "Stack"],
  tags: ["String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 57.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "a)b(c)d)",
  defaultOptions: {},
  buildSteps: (input) => minRemoveSteps(input),
  Renderer: MinRemoveRenderer,
};
