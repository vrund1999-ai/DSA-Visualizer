import type { LeetCodeProblem } from "../../types";
import type { GcdStringsData } from "./algorithm";
import { gcdStringsSteps } from "./algorithm";
import { CODE } from "./code";
import { GcdStringsRenderer } from "./GcdStringsRenderer";

interface GcdStringsInput {
  str1: string;
  str2: string;
}

export const gcdOfStringsProblem: LeetCodeProblem<GcdStringsInput, GcdStringsData, Record<string, never>> = {
  id: "greatest-common-divisor-of-strings",
  number: 1071,
  title: "Greatest Common Divisor of Strings",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
  summary: "If the strings commute, the answer is the prefix of length gcd(len1, len2).",
  prompt:
    "For two strings, string t divides s if s is a repetition of t. Return the largest " +
    "string that divides both str1 and str2.",
  topics: ["Math", "String"],
  tags: ["Math", "String"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m + n)", timeWorst: "O(m + n)", space: "O(m + n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ str1: "ABCABC", str2: "ABC" }),
  defaultOptions: {},
  buildSteps: (input) => gcdStringsSteps(input.str1, input.str2),
  Renderer: GcdStringsRenderer,
};
