import type { LeetCodeProblem } from "../../types";
import type { BinSubData } from "./algorithm";
import { binSubSteps } from "./algorithm";
import { CODE } from "./code";
import { BinSubRenderer } from "./BinSubRenderer";

interface BinSubInput {
  s: string;
  k: number;
}

export const longestBinarySubsequenceProblem: LeetCodeProblem<BinSubInput, BinSubData, Record<string, never>> = {
  id: "longest-binary-subsequence-less-than-or-equal-to-k",
  number: 2311,
  title: "Longest Binary Subsequence Less Than or Equal to K",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/",
  summary: "Keep every 0 for free, and greedily include low place-value 1s while the binary value stays ≤ k.",
  prompt:
    "Given a binary string s and integer k, return the length of the longest subsequence of s whose value " +
    "as a binary number is at most k (leading zeros allowed).",
  topics: ["String", "Greedy", "Dynamic Programming"],
  tags: ["Greedy", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "1001010", k: 5 }),
  defaultOptions: {},
  buildSteps: (input) => binSubSteps(input.s, input.k),
  Renderer: BinSubRenderer,
};
