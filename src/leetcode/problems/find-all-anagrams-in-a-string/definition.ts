import type { LeetCodeProblem } from "../../types";
import type { FindAnagramsData, FindAnagramsInput } from "./algorithm";
import { findAnagramsSteps } from "./algorithm";
import { CODE } from "./code";
import { FindAnagramsRenderer } from "./FindAnagramsRenderer";

export const findAllAnagramsProblem: LeetCodeProblem<
  FindAnagramsInput,
  FindAnagramsData,
  Record<string, never>
> = {
  id: "find-all-anagrams-in-a-string",
  number: 438,
  title: "Find All Anagrams in a String",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
  summary: "Start indices of every anagram of p in s (sliding window).",
  prompt:
    "Given strings `s` and `p`, return the start indices of every substring of " +
    "`s` that is an anagram of `p`.",
  topics: ["Hash Table", "String", "Sliding Window"],
  tags: ["Hash Table", "String", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "cbaebabacd", p: "abc" }),
  defaultOptions: {},
  buildSteps: (input) => findAnagramsSteps(input),
  Renderer: FindAnagramsRenderer,
};
