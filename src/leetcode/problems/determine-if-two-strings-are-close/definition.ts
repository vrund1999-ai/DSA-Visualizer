import type { LeetCodeProblem } from "../../types";
import type { CloseData } from "./algorithm";
import { closeSteps } from "./algorithm";
import { CODE } from "./code";
import { CloseRenderer } from "./CloseRenderer";

interface CloseInput {
  word1: string;
  word2: string;
}

export const twoStringsCloseProblem: LeetCodeProblem<CloseInput, CloseData, Record<string, never>> = {
  id: "determine-if-two-strings-are-close",
  number: 1657,
  title: "Determine if Two Strings Are Close",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/determine-if-two-strings-are-close/",
  summary: "Close iff both use the same set of characters and the same multiset of character frequencies.",
  prompt:
    "Two strings are close if one can become the other via swapping existing characters and permuting " +
    "character frequencies. Return whether word1 and word2 are close.",
  topics: ["Hash Table", "String", "Sorting", "Counting"],
  tags: ["Counting", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + 26 log 26)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ word1: "cabbba", word2: "abbccc" }),
  defaultOptions: {},
  buildSteps: (input) => closeSteps(input.word1, input.word2),
  Renderer: CloseRenderer,
};
