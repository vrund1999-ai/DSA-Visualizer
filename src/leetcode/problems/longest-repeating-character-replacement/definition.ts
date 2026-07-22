import type { LeetCodeProblem } from "../../types";
import type { CharReplaceData, CharReplaceInput } from "./algorithm";
import { charReplaceSteps } from "./algorithm";
import { CODE } from "./code";
import { CharReplaceRenderer } from "./CharReplaceRenderer";

export const charReplacementProblem: LeetCodeProblem<
  CharReplaceInput,
  CharReplaceData,
  Record<string, never>
> = {
  id: "longest-repeating-character-replacement",
  number: 424,
  title: "Longest Repeating Character Replacement",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
  summary: "Longest same-letter run after ≤ k replacements (sliding window).",
  prompt:
    "Given a string `s` and integer `k`, you may replace up to k characters with " +
    "any uppercase letter. Return the length of the longest substring containing " +
    "a single repeated letter you can achieve.",
  topics: ["Hash Table", "String", "Sliding Window"],
  tags: ["Hash Table", "String", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 62.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "AABABBA", k: 1 }),
  defaultOptions: {},
  buildSteps: (input) => charReplaceSteps(input),
  Renderer: CharReplaceRenderer,
};
