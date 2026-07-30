import type { LeetCodeProblem } from "../../types";
import type { RemoveDigitData } from "./algorithm";
import { removeDigitSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveDigitRenderer } from "./RemoveDigitRenderer";

interface RemoveDigitInput {
  number: string;
  digit: string;
}

export const removeDigitMaximizeProblem: LeetCodeProblem<RemoveDigitInput, RemoveDigitData, Record<string, never>> = {
  id: "remove-digit-from-number-to-maximize-result",
  number: 2259,
  title: "Remove Digit From Number to Maximize Result",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/",
  summary: "Delete each occurrence of the digit and keep the largest result — equal lengths make string comparison exact.",
  prompt:
    "Given a numeric string and a digit that occurs in it, remove exactly one occurrence of that digit to " +
    "produce the maximum possible value. Return it as a string.",
  topics: ["String", "Greedy", "Enumeration"],
  tags: ["Greedy", "Enumeration"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ number: "1231", digit: "1" }),
  defaultOptions: {},
  buildSteps: (input) => removeDigitSteps(input.number, input.digit),
  Renderer: RemoveDigitRenderer,
};
