import type { LeetCodeProblem } from "../../types";
import type { PermStringData } from "./algorithm";
import { permStringSteps } from "./algorithm";
import { CODE } from "./code";
import { PermStringRenderer } from "./PermStringRenderer";

interface PermStringInput {
  s1: string;
  s2: string;
}

export const permutationInStringProblem: LeetCodeProblem<PermStringInput, PermStringData, Record<string, never>> = {
  id: "permutation-in-string",
  number: 567,
  title: "Permutation in String",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/permutation-in-string/",
  summary: "Fixed-size sliding window matching character counts of s1.",
  prompt:
    "Given two strings s1 and s2, return true if s2 contains a permutation of s1 — i.e. " +
    "some substring of s2 has exactly the same character counts as s1.",
  topics: ["Hash Table", "Two Pointers", "String", "Sliding Window"],
  tags: ["Hash Table", "Two Pointers", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(|s2|)", timeWorst: "O(|s2|)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s1: "ab", s2: "eidbaooo" }),
  defaultOptions: {},
  buildSteps: (input) => permStringSteps(input.s1, input.s2),
  Renderer: PermStringRenderer,
};
