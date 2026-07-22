import type { LeetCodeProblem } from "../../types";
import type { WordPatternData, WordPatternInput } from "./algorithm";
import { wordPatternSteps } from "./algorithm";
import { CODE } from "./code";
import { WordPatternRenderer } from "./WordPatternRenderer";

export const wordPatternProblem: LeetCodeProblem<
  WordPatternInput,
  WordPatternData,
  Record<string, never>
> = {
  id: "word-pattern",
  number: 290,
  title: "Word Pattern",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/word-pattern/",
  summary: "Does a string of words follow a letter pattern? (bijection)",
  prompt:
    "Given a `pattern` and a string `s` of space-separated words, return true if " +
    "`s` follows the pattern — a bijection between each letter and each word.",
  topics: ["Hash Table", "String"],
  tags: ["Hash Table", "String"],
  companies: ["Bloomberg"],
  frequency: 30,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ pattern: "abba", s: "dog cat cat dog" }),
  defaultOptions: {},
  buildSteps: (input) => wordPatternSteps(input),
  Renderer: WordPatternRenderer,
};
