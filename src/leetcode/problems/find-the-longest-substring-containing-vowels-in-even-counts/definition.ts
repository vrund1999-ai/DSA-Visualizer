import type { LeetCodeProblem } from "../../types";
import type { VowelMaskData } from "./algorithm";
import { vowelMaskSteps } from "./algorithm";
import { CODE } from "./code";
import { VowelMaskRenderer } from "./VowelMaskRenderer";

export const longestVowelEvenProblem: LeetCodeProblem<string, VowelMaskData, Record<string, never>> = {
  id: "find-the-longest-substring-containing-vowels-in-even-counts",
  number: 1371,
  title: "Find the Longest Substring Containing Vowels in Even Counts",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/",
  summary: "Equal vowel-parity bitmasks bound an all-even-vowel substring; track each mask's first index.",
  prompt:
    "Return the length of the longest substring where each of the vowels a, e, i, o, u appears an even " +
    "number of times.",
  topics: ["Hash Table", "String", "Bit Manipulation", "Prefix Sum"],
  tags: ["Bit Manipulation", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "eleetminicoworoep",
  defaultOptions: {},
  buildSteps: (input) => vowelMaskSteps(input),
  Renderer: VowelMaskRenderer,
};
