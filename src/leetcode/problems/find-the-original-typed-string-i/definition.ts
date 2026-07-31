import type { LeetCodeProblem } from "../../types";
import type { TypedStringData } from "./algorithm";
import { typedStringSteps } from "./algorithm";
import { CODE } from "./code";
import { TypedStringRenderer } from "./TypedStringRenderer";

interface TypedStringInput {
  word: string;
}

export const originalTypedStringProblem: LeetCodeProblem<TypedStringInput, TypedStringData, Record<string, never>> = {
  id: "find-the-original-typed-string-i",
  number: 3330,
  title: "Find the Original Typed String I",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-the-original-typed-string-i/",
  summary: "At most one held key means the count is 1 plus the number of adjacent-equal positions (each a possible long press).",
  prompt:
    "Alice typed a word but may have held one key too long (at most once), duplicating a character. Given " +
    "the final string, return the number of possible original strings.",
  topics: ["String"],
  tags: ["String", "Counting"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ word: "abbcccc" }),
  defaultOptions: {},
  buildSteps: (input) => typedStringSteps(input.word),
  Renderer: TypedStringRenderer,
};
