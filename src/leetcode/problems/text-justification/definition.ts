import type { LeetCodeProblem } from "../../types";
import type { JustifyData } from "./algorithm";
import { justifySteps } from "./algorithm";
import { CODE } from "./code";
import { JustifyRenderer } from "./JustifyRenderer";

interface JustifyInput {
  words: string[];
  maxWidth: number;
}

export const textJustificationProblem: LeetCodeProblem<JustifyInput, JustifyData, Record<string, never>> = {
  id: "text-justification",
  number: 68,
  title: "Text Justification",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/text-justification/",
  summary: "Greedily pack words per line, then spread spaces evenly (extras go left); last line left-aligned.",
  prompt:
    "Given an array of words and a maxWidth, format the text so each line is exactly maxWidth " +
    "characters, fully justified except the last line and single-word lines, which are left-justified.",
  topics: ["Array", "String", "Simulation"],
  tags: ["Array", "String", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ words: ["This", "is", "an", "example", "of", "text", "justification."], maxWidth: 16 }),
  defaultOptions: {},
  buildSteps: (input) => justifySteps(input.words, input.maxWidth),
  Renderer: JustifyRenderer,
};
