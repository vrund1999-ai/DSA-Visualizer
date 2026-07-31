import type { LeetCodeProblem } from "../../types";
import type { VowelSubstrData } from "./algorithm";
import { vowelSubstrSteps } from "./algorithm";
import { CODE } from "./code";
import { VowelSubstrRenderer } from "./VowelSubstrRenderer";

interface VowelSubstrInput {
  word: string;
}

export const countVowelSubstringsProblem: LeetCodeProblem<VowelSubstrInput, VowelSubstrData, Record<string, never>> = {
  id: "count-vowel-substrings-of-a-string",
  number: 2062,
  title: "Count Vowel Substrings of a String",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/count-vowel-substrings-of-a-string/",
  summary: "For each start, extend while characters stay vowels and count whenever all five distinct vowels are present.",
  prompt:
    "A vowel substring contains only vowels (a, e, i, o, u) and includes all five of them. Count the vowel " +
    "substrings of the given word.",
  topics: ["Hash Table", "String"],
  tags: ["Sliding Window", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ word: "cuaieuouac" }),
  defaultOptions: {},
  buildSteps: (input) => vowelSubstrSteps(input.word),
  Renderer: VowelSubstrRenderer,
};
