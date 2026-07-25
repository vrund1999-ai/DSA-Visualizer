import type { LeetCodeProblem } from "../../types";
import type { ConcatWordsData } from "./algorithm";
import { concatWordsSteps } from "./algorithm";
import { CODE } from "./code";
import { ConcatWordsRenderer } from "./ConcatWordsRenderer";

interface ConcatWordsInput {
  s: string;
  words: string[];
}

export const substringConcatWordsProblem: LeetCodeProblem<ConcatWordsInput, ConcatWordsData, Record<string, never>> = {
  id: "substring-with-concatenation-of-all-words",
  number: 30,
  title: "Substring with Concatenation of All Words",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
  summary: "Fixed-size window split into equal chunks whose multiset must equal words.",
  prompt:
    "Given a string s and an array words of equal-length strings, return all starting " +
    "indices of substrings that are a concatenation of every word exactly once, in any " +
    "order, with no characters in between.",
  topics: ["Hash Table", "String", "Sliding Window"],
  tags: ["Hash Table", "String", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·k)", timeWorst: "O(n·k)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "barfoothefoobarman", words: ["foo", "bar"] }),
  defaultOptions: {},
  buildSteps: (input) => concatWordsSteps(input.s, input.words),
  Renderer: ConcatWordsRenderer,
};
