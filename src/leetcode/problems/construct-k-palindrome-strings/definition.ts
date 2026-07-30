import type { LeetCodeProblem } from "../../types";
import type { KPalinData } from "./algorithm";
import { kPalinSteps } from "./algorithm";
import { CODE } from "./code";
import { KPalinRenderer } from "./KPalinRenderer";

interface KPalinInput {
  s: string;
  k: number;
}

export const constructKPalindromesProblem: LeetCodeProblem<KPalinInput, KPalinData, Record<string, never>> = {
  id: "construct-k-palindrome-strings",
  number: 1400,
  title: "Construct K Palindrome Strings",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/construct-k-palindrome-strings/",
  summary: "Feasible iff k ≤ |s| and the count of odd-frequency characters ≤ k (each needs a palindrome center).",
  prompt:
    "Given a string s and integer k, return true if you can use all characters of s to construct exactly k " +
    "palindrome strings.",
  topics: ["Hash Table", "String", "Greedy", "Counting"],
  tags: ["Greedy", "Counting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "annabelle", k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => kPalinSteps(input.s, input.k),
  Renderer: KPalinRenderer,
};
