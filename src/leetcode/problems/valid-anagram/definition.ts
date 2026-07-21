import type { LeetCodeProblem } from "../../types";
import type { AnagramData } from "./algorithm";
import { anagramSteps } from "./algorithm";
import { CODE } from "./code";
import { AnagramRenderer } from "./AnagramRenderer";

export interface AnagramInput {
  s: string;
  t: string;
}

export const validAnagramProblem: LeetCodeProblem<
  AnagramInput,
  AnagramData,
  Record<string, never>
> = {
  id: "valid-anagram",
  number: 242,
  title: "Valid Anagram",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/valid-anagram/",
  summary: "Decide if two strings use the same letters.",
  prompt:
    "Given two strings `s` and `t`, return true if `t` is an anagram of `s` — " +
    "i.e. it uses exactly the same letters with the same frequencies.",
  topics: ["Hash Table", "String", "Sorting"],
  tags: ["Hash Table", "String", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 74.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "anagram", t: "nagaram" }),
  defaultOptions: {},
  buildSteps: (input) => anagramSteps(input.s, input.t),
  Renderer: AnagramRenderer,
};
