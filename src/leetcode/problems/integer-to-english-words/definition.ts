import type { LeetCodeProblem } from "../../types";
import type { EnglishData } from "./algorithm";
import { englishWordsSteps } from "./algorithm";
import { CODE } from "./code";
import { EnglishRenderer } from "./EnglishRenderer";

interface EnglishInput {
  num: number;
}

export const integerToEnglishProblem: LeetCodeProblem<EnglishInput, EnglishData, Record<string, never>> = {
  id: "integer-to-english-words",
  number: 273,
  title: "Integer to English Words",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/integer-to-english-words/",
  summary: "Split the number into three-digit groups and name each group followed by its scale (Thousand, Million…).",
  prompt: "Convert a non-negative integer to its English words representation.",
  topics: ["Math", "String", "Recursion"],
  tags: ["Math", "String"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log₁₀ n)", timeWorst: "O(log₁₀ n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ num: 1234567 }),
  defaultOptions: {},
  buildSteps: (input) => englishWordsSteps(input.num),
  Renderer: EnglishRenderer,
};
