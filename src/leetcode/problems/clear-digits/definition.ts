import type { LeetCodeProblem } from "../../types";
import type { ClearDigitsData } from "./algorithm";
import { clearDigitsSteps } from "./algorithm";
import { CODE } from "./code";
import { ClearDigitsRenderer } from "./ClearDigitsRenderer";

export const clearDigitsProblem: LeetCodeProblem<string, ClearDigitsData, Record<string, never>> = {
  id: "clear-digits",
  number: 3174,
  title: "Clear Digits",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/clear-digits/",
  summary: "Push letters on a stack; each digit pops the closest letter to its left.",
  prompt:
    "Given a string of lowercase letters and digits, repeatedly delete the first digit and the " +
    "closest non-digit character to its left. Return the resulting string (guaranteed possible).",
  topics: ["String", "Stack", "Simulation"],
  tags: ["String", "Stack", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "cb34",
  defaultOptions: {},
  buildSteps: (input) => clearDigitsSteps(input),
  Renderer: ClearDigitsRenderer,
};
