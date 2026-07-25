import type { LeetCodeProblem } from "../../types";
import type { RemoveOuterData } from "./algorithm";
import { removeOuterSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveOuterRenderer } from "./RemoveOuterRenderer";

export const removeOutermostParenthesesProblem: LeetCodeProblem<string, RemoveOuterData, Record<string, never>> = {
  id: "remove-outermost-parentheses",
  number: 1021,
  title: "Remove Outermost Parentheses",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/remove-outermost-parentheses/",
  summary: "Depth counter drops each primitive's outer pair, keeps everything deeper.",
  prompt:
    "A valid parentheses string decomposes into primitives. Remove the outermost pair of " +
    "every primitive and return the concatenation of what remains.",
  topics: ["String", "Stack"],
  tags: ["String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "(()())(())",
  defaultOptions: {},
  buildSteps: (input) => removeOuterSteps(input),
  Renderer: RemoveOuterRenderer,
};
