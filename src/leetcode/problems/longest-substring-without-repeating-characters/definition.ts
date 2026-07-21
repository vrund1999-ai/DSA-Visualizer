import type { LeetCodeProblem } from "../../types";
import type { SlidingData } from "./algorithm";
import { slidingSteps } from "./algorithm";
import { CODE } from "./code";
import { SlidingRenderer } from "./SlidingRenderer";

export const longestSubstringProblem: LeetCodeProblem<
  string,
  SlidingData,
  Record<string, never>
> = {
  id: "longest-substring-without-repeating-characters",
  number: 3,
  title: "Longest Substring Without Repeating Characters",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
  summary: "Longest window of distinct characters, via sliding window.",
  prompt:
    "Given a string `s`, find the length of the longest substring without " +
    "repeating characters.",
  topics: ["Hash Table", "String", "Sliding Window"],
  tags: ["Hash Table", "String", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 85.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => "abcabcbb",
  defaultOptions: {},
  buildSteps: (input) => slidingSteps(input),
  Renderer: SlidingRenderer,
};
