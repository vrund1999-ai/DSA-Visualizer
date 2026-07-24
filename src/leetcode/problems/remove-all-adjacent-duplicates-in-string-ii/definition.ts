import type { LeetCodeProblem } from "../../types";
import type { RemoveAdjData, RemoveAdjInput } from "./algorithm";
import { removeAdjSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveAdjRenderer } from "./RemoveAdjRenderer";

export const removeAdjacentDuplicatesIIProblem: LeetCodeProblem<
  RemoveAdjInput,
  RemoveAdjData,
  Record<string, never>
> = {
  id: "remove-all-adjacent-duplicates-in-string-ii",
  number: 1209,
  title: "Remove All Adjacent Duplicates in String II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/",
  summary: "Collapse runs of k identical chars with a count stack.",
  prompt:
    "Given a string `s` and an integer `k`, repeatedly remove k adjacent equal " +
    "characters until none remain, and return the final string.",
  topics: ["String", "Stack"],
  tags: ["String", "Stack"],
  companies: ["Bloomberg"],
  frequency: 59.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "deeedbbcccbdaa", k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => removeAdjSteps(input),
  Renderer: RemoveAdjRenderer,
};
