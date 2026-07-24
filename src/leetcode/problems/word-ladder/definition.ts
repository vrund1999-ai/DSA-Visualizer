import type { LeetCodeProblem } from "../../types";
import type { WordLadderData } from "./algorithm";
import { wordLadderSteps } from "./algorithm";
import { CODE } from "./code";
import { WordLadderRenderer } from "./WordLadderRenderer";

interface WordLadderInput {
  begin: string;
  end: string;
  wordList: string[];
}

export const wordLadderProblem: LeetCodeProblem<WordLadderInput, WordLadderData, Record<string, never>> = {
  id: "word-ladder",
  number: 127,
  title: "Word Ladder",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/word-ladder/",
  summary: "BFS over single-letter edits to find the shortest transformation length.",
  prompt:
    "Given begin and end words and a dictionary, return the number of words in the " +
    "shortest transformation sequence from begin to end, changing one letter at a time " +
    "where every intermediate word is in the dictionary (0 if impossible).",
  topics: ["Hash Table", "String", "Breadth-First Search"],
  tags: ["Hash Table", "String", "Breadth-First Search"],
  companies: ["Bloomberg"],
  frequency: 51.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(N·L·26)", timeWorst: "O(N·L·26)", space: "O(N·L)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    begin: "hit",
    end: "cog",
    wordList: ["hot", "dot", "dog", "lot", "log", "cog"],
  }),
  defaultOptions: {},
  buildSteps: (input) => wordLadderSteps(input.begin, input.end, input.wordList),
  Renderer: WordLadderRenderer,
};
