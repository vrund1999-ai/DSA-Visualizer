import type { LeetCodeProblem } from "../../types";
import type { LongestSubstrData } from "./algorithm";
import { longestSubstrSteps } from "./algorithm";
import { CODE } from "./code";
import { LongestSubstrRenderer } from "./LongestSubstrRenderer";

interface LongestSubstrInput {
  s: string;
  k: number;
}

export const longestSubstrKRepeatingProblem: LeetCodeProblem<LongestSubstrInput, LongestSubstrData, Record<string, never>> = {
  id: "longest-substring-with-at-least-k-repeating-characters",
  number: 395,
  title: "Longest Substring with At Least K Repeating Characters",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/",
  summary: "Any character occurring fewer than k times can't be in the answer, so it splits the string — recurse on the pieces.",
  prompt:
    "Return the length of the longest substring of s in which every character appears at least k times.",
  topics: ["Hash Table", "String", "Divide and Conquer", "Sliding Window"],
  tags: ["Divide and Conquer", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·26)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "ababbc", k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => longestSubstrSteps(input.s, input.k),
  Renderer: LongestSubstrRenderer,
};
