import type { LeetCodeProblem } from "../../types";
import type { WordBreakData, WordBreakInput } from "./algorithm";
import { wordBreakSteps } from "./algorithm";
import { CODE } from "./code";
import { WordBreakRenderer } from "./WordBreakRenderer";

export const wordBreakProblem: LeetCodeProblem<
  WordBreakInput,
  WordBreakData,
  Record<string, never>
> = {
  id: "word-break",
  number: 139,
  title: "Word Break",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/word-break/",
  summary: "Can a string be segmented into dictionary words? (DP)",
  prompt:
    "Given a string `s` and a dictionary `wordDict`, return true if `s` can be " +
    "segmented into a space-separated sequence of one or more dictionary words. " +
    "Words may be reused.",
  topics: ["Hash Table", "String", "Dynamic Programming", "Trie", "Memoization"],
  tags: ["Hash Table", "String", "Dynamic Programming", "Trie", "Memoization"],
  companies: ["Bloomberg"],
  frequency: 59.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "leetcode", dict: ["leet", "code"] }),
  defaultOptions: {},
  buildSteps: (input) => wordBreakSteps(input),
  Renderer: WordBreakRenderer,
};
