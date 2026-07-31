import type { LeetCodeProblem } from "../../types";
import type { CommonPrefixData } from "./algorithm";
import { commonPrefixSteps } from "./algorithm";
import { CODE } from "./code";
import { CommonPrefixRenderer } from "./CommonPrefixRenderer";

interface CommonPrefixInput {
  arr1: number[];
  arr2: number[];
}

export const longestCommonPrefixNumbersProblem: LeetCodeProblem<CommonPrefixInput, CommonPrefixData, Record<string, never>> = {
  id: "find-the-length-of-the-longest-common-prefix",
  number: 3043,
  title: "Find the Length of the Longest Common Prefix",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/",
  summary: "Store every digit-prefix of arr1 in a set, then test each arr2 number's prefixes to find the longest shared one.",
  prompt:
    "Given two integer arrays, find the length of the longest common prefix (as decimal digit strings) " +
    "between any pair of numbers, one from each array. Return 0 if none.",
  topics: ["Array", "Hash Table", "String", "Trie"],
  tags: ["Trie", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(Σ digits)", timeWorst: "O(Σ digits)", space: "O(Σ digits)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr1: [1, 10, 100], arr2: [1000] }),
  defaultOptions: {},
  buildSteps: (input) => commonPrefixSteps(input.arr1, input.arr2),
  Renderer: CommonPrefixRenderer,
};
