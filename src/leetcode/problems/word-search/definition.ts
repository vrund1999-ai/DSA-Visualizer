import type { LeetCodeProblem } from "../../types";
import type { WordSearchData } from "./algorithm";
import { wordSearchSteps } from "./algorithm";
import { CODE } from "./code";
import { WordSearchRenderer } from "./WordSearchRenderer";

export interface WordSearchInput {
  board: string[][];
  word: string;
}

export const wordSearchProblem: LeetCodeProblem<
  WordSearchInput,
  WordSearchData,
  Record<string, never>
> = {
  id: "word-search",
  number: 79,
  title: "Word Search",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/word-search/",
  summary: "Find a word in a grid via backtracking DFS.",
  prompt:
    "Given an m×n grid of characters `board` and a string `word`, return true " +
    "if `word` exists in the grid. The word is built from sequentially adjacent " +
    "cells (horizontal or vertical neighbours); the same cell may not be used " +
    "more than once.",
  topics: ["Array", "String", "Backtracking", "Depth-First Search", "Matrix"],
  tags: ["Array", "String", "Backtracking", "Depth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 78.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n·4^L)", timeWorst: "O(m·n·4^L)", space: "O(L)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    board: [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    word: "ABCCED",
  }),
  defaultOptions: {},
  buildSteps: (input) => wordSearchSteps(input.board, input.word),
  Renderer: WordSearchRenderer,
};
