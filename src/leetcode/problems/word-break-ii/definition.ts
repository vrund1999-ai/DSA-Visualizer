import type { LeetCodeProblem } from "../../types";
import type { WordBreakIIData } from "./algorithm";
import { wordBreakIISteps } from "./algorithm";
import { CODE } from "./code";
import { WordBreakIIRenderer } from "./WordBreakIIRenderer";

interface WordBreakIIInput {
  s: string;
  wordDict: string[];
}

export const wordBreakIIProblem: LeetCodeProblem<WordBreakIIInput, WordBreakIIData, Record<string, never>> = {
  id: "word-break-ii",
  number: 140,
  title: "Word Break II",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/word-break-ii/",
  summary: "Backtracking with memoization enumerates every valid segmentation.",
  prompt:
    "Given a string s and a dictionary of words, add spaces to construct every possible " +
    "sentence where each word is a valid dictionary word. Return all such sentences.",
  topics: ["Hash Table", "String", "Dynamic Programming", "Backtracking", "Trie", "Memoization"],
  tags: ["String", "Dynamic Programming", "Backtracking", "Memoization"],
  companies: ["Bloomberg"],
  frequency: 63.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·2^n)", timeWorst: "O(n·2^n)", space: "O(n·2^n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "catsanddog", wordDict: ["cat", "cats", "and", "sand", "dog"] }),
  defaultOptions: {},
  buildSteps: (input) => wordBreakIISteps(input.s, input.wordDict),
  Renderer: WordBreakIIRenderer,
};
