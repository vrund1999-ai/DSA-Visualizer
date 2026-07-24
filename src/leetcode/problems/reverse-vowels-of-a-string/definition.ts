import type { LeetCodeProblem } from "../../types";
import type { ReverseVowelsData } from "./algorithm";
import { reverseVowelsSteps } from "./algorithm";
import { CODE } from "./code";
import { ReverseVowelsRenderer } from "./ReverseVowelsRenderer";

export const reverseVowelsProblem: LeetCodeProblem<string, ReverseVowelsData, Record<string, never>> = {
  id: "reverse-vowels-of-a-string",
  number: 345,
  title: "Reverse Vowels of a String",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/reverse-vowels-of-a-string/",
  summary: "Two pointers swap only the vowels, leaving other characters in place.",
  prompt:
    "Given a string s, reverse only the vowels (a, e, i, o, u — both cases) and return " +
    "the resulting string. All other characters stay in place.",
  topics: ["Two Pointers", "String"],
  tags: ["Two Pointers", "String"],
  companies: ["Bloomberg"],
  frequency: 48.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "leetcode",
  defaultOptions: {},
  buildSteps: (input) => reverseVowelsSteps(input),
  Renderer: ReverseVowelsRenderer,
};
