import type { LeetCodeProblem } from "../../types";
import type { RemoveDupLettersData } from "./algorithm";
import { removeDupLettersSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveDupLettersRenderer } from "./RemoveDupLettersRenderer";

export const removeDuplicateLettersProblem: LeetCodeProblem<string, RemoveDupLettersData, Record<string, never>> = {
  id: "remove-duplicate-letters",
  number: 316,
  title: "Remove Duplicate Letters",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/remove-duplicate-letters/",
  summary: "Greedy monotonic stack yields the lexicographically smallest distinct result.",
  prompt:
    "Remove duplicate letters from s so every letter appears once and the result is the " +
    "smallest in lexicographical order among all such strings.",
  topics: ["String", "Stack", "Greedy", "Monotonic Stack"],
  tags: ["String", "Stack", "Greedy", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "cbacdcbc",
  defaultOptions: {},
  buildSteps: (input) => removeDupLettersSteps(input),
  Renderer: RemoveDupLettersRenderer,
};
