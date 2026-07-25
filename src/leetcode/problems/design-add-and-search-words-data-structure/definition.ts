import type { LeetCodeProblem } from "../../types";
import type { WordDictData, WordOp } from "./algorithm";
import { wordDictSteps } from "./algorithm";
import { CODE } from "./code";
import { WordDictRenderer } from "./WordDictRenderer";

export const designAddSearchWordsProblem: LeetCodeProblem<WordOp[], WordDictData, Record<string, never>> = {
  id: "design-add-and-search-words-data-structure",
  number: 211,
  title: "Design Add and Search Words Data Structure",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
  summary: "A trie stores words by prefix; search follows a literal edge or branches into all children for '.'.",
  prompt:
    "Design a data structure supporting addWord(word) and search(word), where search may contain '.' " +
    "characters that match any single letter.",
  topics: ["String", "Depth-First Search", "Design", "Trie"],
  tags: ["String", "Depth-First Search", "Design", "Trie"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(L) add, O(26^dots·L) search", timeWorst: "O(26^L)", space: "O(N·L)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["add", "bad"],
    ["add", "dad"],
    ["add", "mad"],
    ["search", "pad"],
    ["search", "bad"],
    ["search", ".ad"],
    ["search", "b.."],
  ],
  defaultOptions: {},
  buildSteps: (input) => wordDictSteps(input),
  Renderer: WordDictRenderer,
};
