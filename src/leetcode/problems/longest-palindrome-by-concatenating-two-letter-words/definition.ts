import type { LeetCodeProblem } from "../../types";
import type { TwoLetterPalinData } from "./algorithm";
import { twoLetterPalinSteps } from "./algorithm";
import { CODE } from "./code";
import { TwoLetterPalinRenderer } from "./TwoLetterPalinRenderer";

interface TwoLetterPalinInput {
  words: string[];
}

export const twoLetterPalindromeProblem: LeetCodeProblem<TwoLetterPalinInput, TwoLetterPalinData, Record<string, never>> = {
  id: "longest-palindrome-by-concatenating-two-letter-words",
  number: 2131,
  title: "Longest Palindrome by Concatenating Two Letter Words",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/",
  summary: "Pair each word with its reverse (+4 each); a same-letter word can also sit once in the center (+2).",
  prompt:
    "Given an array of 2-letter words, concatenate some of them (in any order, each used at most once) to " +
    "form the longest possible palindrome. Return its length.",
  topics: ["Array", "Hash Table", "String", "Greedy", "Counting"],
  tags: ["Greedy", "Counting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ words: ["lc", "cl", "gg"] }),
  defaultOptions: {},
  buildSteps: (input) => twoLetterPalinSteps(input.words),
  Renderer: TwoLetterPalinRenderer,
};
