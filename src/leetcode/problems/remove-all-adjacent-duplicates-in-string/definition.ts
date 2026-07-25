import type { LeetCodeProblem } from "../../types";
import type { RemoveAdjData } from "./algorithm";
import { removeAdjSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveAdjRenderer } from "./RemoveAdjRenderer";

export const removeAdjacentDuplicatesProblem: LeetCodeProblem<string, RemoveAdjData, Record<string, never>> = {
  id: "remove-all-adjacent-duplicates-in-string",
  number: 1047,
  title: "Remove All Adjacent Duplicates In String",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
  summary: "Push characters on a stack; an incoming char equal to the top cancels the pair.",
  prompt:
    "Repeatedly remove two adjacent equal characters until none remain, and return the final " +
    "string. The result is unique.",
  topics: ["String", "Stack"],
  tags: ["String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "abbaca",
  defaultOptions: {},
  buildSteps: (input) => removeAdjSteps(input),
  Renderer: RemoveAdjRenderer,
};
