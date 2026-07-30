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

export const wordLadderIIProblem: LeetCodeProblem<WordLadderInput, WordLadderData, Record<string, never>> = {
  id: "word-ladder-ii",
  number: 126,
  title: "Word Ladder II",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/word-ladder-ii/",
  summary: "BFS layers the dictionary by distance and records parents; backtracking rebuilds every shortest ladder.",
  prompt:
    "Given beginWord, endWord and a dictionary, return all shortest transformation sequences changing one " +
    "letter at a time, where every intermediate word is in the dictionary.",
  topics: ["Hash Table", "String", "Backtracking", "Breadth-First Search"],
  tags: ["BFS", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(N · L · 26)", timeWorst: "O(N · L · 26)", space: "O(N · L)" },
  inputSchema: [],
  makeDefaultInput: () => ({ begin: "hit", end: "cog", wordList: ["hot", "dot", "dog", "lot", "log", "cog"] }),
  defaultOptions: {},
  buildSteps: (input) => wordLadderSteps(input.begin, input.end, input.wordList),
  Renderer: WordLadderRenderer,
};
