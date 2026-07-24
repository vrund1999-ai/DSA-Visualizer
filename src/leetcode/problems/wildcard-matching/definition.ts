import type { LeetCodeProblem } from "../../types";
import type { WildcardData } from "./algorithm";
import { wildcardSteps } from "./algorithm";
import { CODE } from "./code";
import { WildcardRenderer } from "./WildcardRenderer";

interface WildcardInput {
  s: string;
  p: string;
}

export const wildcardMatchingProblem: LeetCodeProblem<WildcardInput, WildcardData, Record<string, never>> = {
  id: "wildcard-matching",
  number: 44,
  title: "Wildcard Matching",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/wildcard-matching/",
  summary: "2D DP where '?' matches any char and '*' matches any sequence.",
  prompt:
    "Implement wildcard pattern matching with support for '?' (matches any single " +
    "character) and '*' (matches any sequence of characters, including the empty " +
    "sequence). The match must cover the entire input string.",
  topics: ["String", "Dynamic Programming", "Greedy", "Recursion"],
  tags: ["String", "Dynamic Programming", "Greedy", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 48.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "adceb", p: "*a*b" }),
  defaultOptions: {},
  buildSteps: (input) => wildcardSteps(input.s, input.p),
  Renderer: WildcardRenderer,
};
