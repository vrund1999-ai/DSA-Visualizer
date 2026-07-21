import type { LeetCodeProblem } from "../../types";
import type { LCPData } from "./algorithm";
import { lcpSteps } from "./algorithm";
import { CODE } from "./code";
import { LCPRenderer } from "./LCPRenderer";

export const longestCommonPrefixProblem: LeetCodeProblem<
  string[],
  LCPData,
  Record<string, never>
> = {
  id: "longest-common-prefix",
  number: 14,
  title: "Longest Common Prefix",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/longest-common-prefix/",
  summary: "Longest prefix shared by every string.",
  prompt:
    "Write a function to find the longest common prefix string amongst an array " +
    "of strings. If there is no common prefix, return an empty string.",
  topics: ["Array", "String", "Trie"],
  tags: ["Array", "String", "Trie"],
  companies: ["Bloomberg"],
  frequency: 78.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·m)", timeWorst: "O(n·m)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ["flower", "flow", "flight"],
  defaultOptions: {},
  buildSteps: (input) => lcpSteps(input),
  Renderer: LCPRenderer,
};
