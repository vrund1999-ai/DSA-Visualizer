import type { LeetCodeProblem } from "../../types";
import type { RegexData } from "./algorithm";
import { regexSteps } from "./algorithm";
import { CODE } from "./code";
import { RegexRenderer } from "./RegexRenderer";

interface RegexInput {
  s: string;
  p: string;
}

export const regexMatchingProblem: LeetCodeProblem<RegexInput, RegexData, Record<string, never>> = {
  id: "regular-expression-matching",
  number: 10,
  title: "Regular Expression Matching",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/regular-expression-matching/",
  summary: "2D DP over string × pattern with '.' and '*' support.",
  prompt:
    "Implement regular expression matching with support for '.' (matches any single " +
    "character) and '*' (matches zero or more of the preceding element). The match must " +
    "cover the entire input string.",
  topics: ["String", "Dynamic Programming", "Recursion"],
  tags: ["String", "Dynamic Programming", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 50.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "aab", p: "c*a*b" }),
  defaultOptions: {},
  buildSteps: (input) => regexSteps(input.s, input.p),
  Renderer: RegexRenderer,
};
