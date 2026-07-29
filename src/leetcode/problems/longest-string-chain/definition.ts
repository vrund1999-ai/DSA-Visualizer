import type { LeetCodeProblem } from "../../types";
import type { StrChainData } from "./algorithm";
import { strChainSteps } from "./algorithm";
import { CODE } from "./code";
import { StrChainRenderer } from "./StrChainRenderer";

export const longestStringChainProblem: LeetCodeProblem<string[], StrChainData, Record<string, never>> = {
  id: "longest-string-chain",
  number: 1048,
  title: "Longest String Chain",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-string-chain/",
  summary: "Sort by length; each word's chain = 1 + best predecessor obtained by deleting one letter.",
  prompt:
    "wordA is a predecessor of wordB if inserting one letter into wordA makes wordB. Return the length " +
    "of the longest possible word chain from the given words.",
  topics: ["Array", "Hash Table", "Two Pointers", "String", "Dynamic Programming"],
  tags: ["Array", "Hash Table", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·L²)", timeWorst: "O(n·L²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ["a", "b", "ba", "bca", "bda", "bdca"],
  defaultOptions: {},
  buildSteps: (input) => strChainSteps(input),
  Renderer: StrChainRenderer,
};
