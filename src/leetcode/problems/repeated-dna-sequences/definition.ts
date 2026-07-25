import type { LeetCodeProblem } from "../../types";
import type { DnaData } from "./algorithm";
import { dnaSteps } from "./algorithm";
import { CODE } from "./code";
import { DnaRenderer } from "./DnaRenderer";

export const repeatedDnaSequencesProblem: LeetCodeProblem<string, DnaData, Record<string, never>> = {
  id: "repeated-dna-sequences",
  number: 187,
  title: "Repeated DNA Sequences",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/repeated-dna-sequences/",
  summary: "Slide a 10-letter window; a set flags any sequence seen more than once.",
  prompt:
    "Given a DNA string of A, C, G, T, return every 10-letter substring that occurs more " +
    "than once.",
  topics: ["Hash Table", "String", "Bit Manipulation", "Sliding Window", "Hashing"],
  tags: ["Hash Table", "String", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",
  defaultOptions: {},
  buildSteps: (input) => dnaSteps(input),
  Renderer: DnaRenderer,
};
