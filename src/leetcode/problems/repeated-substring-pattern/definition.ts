import type { LeetCodeProblem } from "../../types";
import type { RepeatedData } from "./algorithm";
import { repeatedSteps } from "./algorithm";
import { CODE } from "./code";
import { RepeatedRenderer } from "./RepeatedRenderer";

export const repeatedSubstringPatternProblem: LeetCodeProblem<string, RepeatedData, Record<string, never>> = {
  id: "repeated-substring-pattern",
  number: 459,
  title: "Repeated Substring Pattern",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/repeated-substring-pattern/",
  summary: "Test each prefix whose length divides n: does tiling it reproduce the whole string?",
  prompt:
    "Given a string s, return true if it can be constructed by taking a substring of it and " +
    "appending multiple copies of that substring together.",
  topics: ["String", "String Matching"],
  tags: ["String", "String Matching"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·√n)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "abcabcabc",
  defaultOptions: {},
  buildSteps: (input) => repeatedSteps(input),
  Renderer: RepeatedRenderer,
};
