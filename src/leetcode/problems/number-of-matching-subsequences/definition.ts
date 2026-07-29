import type { LeetCodeProblem } from "../../types";
import type { MatchSubseqData } from "./algorithm";
import { matchSubseqSteps } from "./algorithm";
import { CODE } from "./code";
import { MatchSubseqRenderer } from "./MatchSubseqRenderer";

interface MatchSubseqInput {
  s: string;
  words: string[];
}

export const numberOfMatchingSubsequencesProblem: LeetCodeProblem<MatchSubseqInput, MatchSubseqData, Record<string, never>> = {
  id: "number-of-matching-subsequences",
  number: 792,
  title: "Number of Matching Subsequences",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-matching-subsequences/",
  summary: "Bucket words by next-needed char; one pass over s advances the right bucket each character.",
  prompt:
    "Given a string s and an array of words, return the number of words that are subsequences of s.",
  topics: ["Array", "Hash Table", "String", "Trie", "Sorting"],
  tags: ["Array", "Hash Table", "String"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(|s| + Σ|word|)", timeWorst: "O(|s| + Σ|word|)", space: "O(Σ|word|)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "abcde", words: ["a", "bb", "acd", "ace"] }),
  defaultOptions: {},
  buildSteps: (input) => matchSubseqSteps(input.s, input.words),
  Renderer: MatchSubseqRenderer,
};
