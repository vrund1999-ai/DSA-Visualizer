import type { LeetCodeProblem } from "../../types";
import type { ConsistentData } from "./algorithm";
import { consistentSteps } from "./algorithm";
import { CODE } from "./code";
import { ConsistentRenderer } from "./ConsistentRenderer";

interface ConsistentInput {
  allowed: string;
  words: string[];
}

export const countConsistentStringsProblem: LeetCodeProblem<ConsistentInput, ConsistentData, Record<string, never>> = {
  id: "count-the-number-of-consistent-strings",
  number: 1684,
  title: "Count the Number of Consistent Strings",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/count-the-number-of-consistent-strings/",
  summary: "Put allowed characters in a set; count words whose every character is in it.",
  prompt:
    "A string is consistent if all its characters appear in the allowed string. Return the number of " +
    "consistent strings in words.",
  topics: ["Array", "Hash Table", "String", "Bit Manipulation", "Counting"],
  tags: ["Array", "Hash Table", "String"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(Σ|word|)", timeWorst: "O(Σ|word|)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ allowed: "ab", words: ["ad", "bd", "aaab", "baa", "badab"] }),
  defaultOptions: {},
  buildSteps: (input) => consistentSteps(input.allowed, input.words),
  Renderer: ConsistentRenderer,
};
