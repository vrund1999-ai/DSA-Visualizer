import type { LeetCodeProblem } from "../../types";
import type { MagicData } from "./algorithm";
import { magicSteps } from "./algorithm";
import { CODE } from "./code";
import { MagicRenderer } from "./MagicRenderer";

interface MagicInput {
  words: string[];
  search: string;
}

export const implementMagicDictionaryProblem: LeetCodeProblem<MagicInput, MagicData, Record<string, never>> = {
  id: "implement-magic-dictionary",
  number: 676,
  title: "Implement Magic Dictionary",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/implement-magic-dictionary/",
  summary: "For each same-length word, count position mismatches; accept when exactly one differs.",
  prompt:
    "Design a dictionary that, after buildDict(words), answers search(word): true if changing " +
    "exactly one letter of word yields a stored word.",
  topics: ["Hash Table", "String", "Design", "Trie"],
  tags: ["Hash Table", "String", "Design", "Trie"],
  companies: ["Bloomberg"],
  frequency: 42.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n · L)", timeWorst: "O(n · L)", space: "O(n · L)" },
  inputSchema: [],
  makeDefaultInput: () => ({ words: ["hello", "leetcode", "hallo"], search: "hhllo" }),
  defaultOptions: {},
  buildSteps: (input) => magicSteps(input.words, input.search),
  Renderer: MagicRenderer,
};
