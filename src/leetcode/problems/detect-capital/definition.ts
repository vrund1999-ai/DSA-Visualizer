import type { LeetCodeProblem } from "../../types";
import type { DetectCapitalData } from "./algorithm";
import { detectCapitalSteps } from "./algorithm";
import { CODE } from "./code";
import { DetectCapitalRenderer } from "./DetectCapitalRenderer";

export const detectCapitalProblem: LeetCodeProblem<string, DetectCapitalData, Record<string, never>> = {
  id: "detect-capital",
  number: 520,
  title: "Detect Capital",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/detect-capital/",
  summary: "Check the word against the three valid patterns: all-caps, all-lower, or title case.",
  prompt:
    "Return true if the capitalization in word is correct: all letters capital, all letters lower, " +
    "or only the first letter capital.",
  topics: ["String"],
  tags: ["String"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "Google",
  defaultOptions: {},
  buildSteps: (input) => detectCapitalSteps(input),
  Renderer: DetectCapitalRenderer,
};
