import type { LeetCodeProblem } from "../../types";
import type { MaxScoreWordsData } from "./algorithm";
import { maxScoreWordsSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxScoreWordsRenderer } from "./MaxScoreWordsRenderer";

interface MaxScoreWordsInput {
  words: string[];
  letters: string[];
  score: number[];
}

export const maxScoreWordsProblem: LeetCodeProblem<MaxScoreWordsInput, MaxScoreWordsData, Record<string, never>> = {
  id: "maximum-score-words-formed-by-letters",
  number: 1255,
  title: "Maximum Score Words Formed by Letters",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/maximum-score-words-formed-by-letters/",
  summary: "Backtracking include/exclude each word (deducting shared letters on include) to maximize the total letter score.",
  prompt:
    "Given words, a multiset of available letters, and a per-letter score, choose a subset of words that can " +
    "be spelled from the letters (each used once) to maximize the total score.",
  topics: ["Array", "String", "Dynamic Programming", "Backtracking", "Bitmask"],
  tags: ["Backtracking", "Bitmask"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(2^n · L)", timeWorst: "O(2^n · L)", space: "O(26)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    words: ["dog", "cat", "dad", "good"],
    letters: ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
    score: [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  }),
  defaultOptions: {},
  buildSteps: (input) => maxScoreWordsSteps(input.words, input.letters, input.score),
  Renderer: MaxScoreWordsRenderer,
};
