import type { LeetCodeProblem } from "../../types";
import type { SpellData } from "./algorithm";
import { spellSteps } from "./algorithm";
import { CODE } from "./code";
import { SpellRenderer } from "./SpellRenderer";

interface SpellInput {
  wordlist: string[];
  queries: string[];
}

export const vowelSpellcheckerProblem: LeetCodeProblem<SpellInput, SpellData, Record<string, never>> = {
  id: "vowel-spellchecker",
  number: 966,
  title: "Vowel Spellchecker",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/vowel-spellchecker/",
  summary: "Resolve each query by precedence: exact, then case-insensitive, then vowel-error — via three hash maps.",
  prompt:
    "Given a wordlist and queries, return for each query the matching word using precedence: exact match, " +
    "then capitalization match, then vowel-error match (vowels interchangeable), else \"\".",
  topics: ["Array", "Hash Table", "String"],
  tags: ["Hash Table", "String"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(Σ|word|)", timeWorst: "O(Σ|word|)", space: "O(Σ|word|)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    wordlist: ["KiTe", "kite", "hare", "Hare"],
    queries: ["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"],
  }),
  defaultOptions: {},
  buildSteps: (input) => spellSteps(input.wordlist, input.queries),
  Renderer: SpellRenderer,
};
