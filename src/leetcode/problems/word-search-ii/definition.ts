import type { LeetCodeProblem } from "../../types";
import type { WordSearch2Data } from "./algorithm";
import { wordSearch2Steps } from "./algorithm";
import { CODE } from "./code";
import { WordSearch2Renderer } from "./WordSearch2Renderer";

interface WordSearch2Input {
  board: string[][];
  words: string[];
}

export const wordSearchIIProblem: LeetCodeProblem<WordSearch2Input, WordSearch2Data, Record<string, never>> = {
  id: "word-search-ii",
  number: 212,
  title: "Word Search II",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/word-search-ii/",
  summary: "A trie of all words lets a single backtracking DFS follow every candidate prefix through the board at once.",
  prompt:
    "Given an m×n board of letters and a list of words, return all words that can be formed from " +
    "sequentially adjacent cells (horizontally or vertically), using each cell at most once per word.",
  topics: ["Array", "String", "Trie", "Backtracking", "Matrix"],
  tags: ["Trie", "Backtracking", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(M·N·4·3^L)", timeWorst: "O(M·N·4·3^L)", space: "O(total letters)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    board: [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
    ],
    words: ["oath", "eat", "rain"],
  }),
  defaultOptions: {},
  buildSteps: (input) => wordSearch2Steps(input.board, input.words),
  Renderer: WordSearch2Renderer,
};
