import type { LeetCodeProblem } from "../../types";
import type { ReverseStringData } from "./algorithm";
import { reverseStringSteps } from "./algorithm";
import { CODE } from "./code";
import { ReverseStringRenderer } from "./ReverseStringRenderer";

export const reverseStringProblem: LeetCodeProblem<
  string[],
  ReverseStringData,
  Record<string, never>
> = {
  id: "reverse-string",
  number: 344,
  title: "Reverse String",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/reverse-string/",
  summary: "Reverse a character array in-place with two pointers.",
  prompt:
    "Write a function that reverses a string, given as a character array `s`, " +
    "in-place using O(1) extra memory.",
  topics: ["Two Pointers", "String"],
  tags: ["Two Pointers", "String"],
  companies: ["Bloomberg"],
  frequency: 51.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ["h", "e", "l", "l", "o"],
  defaultOptions: {},
  buildSteps: (input) => reverseStringSteps(input),
  Renderer: ReverseStringRenderer,
};
