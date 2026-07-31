import type { LeetCodeProblem } from "../../types";
import type { NiceSubstrData } from "./algorithm";
import { niceSubstrSteps } from "./algorithm";
import { CODE } from "./code";
import { NiceSubstrRenderer } from "./NiceSubstrRenderer";

interface NiceSubstrInput {
  s: string;
}

export const longestNiceSubstringProblem: LeetCodeProblem<NiceSubstrInput, NiceSubstrData, Record<string, never>> = {
  id: "longest-nice-substring",
  number: 1763,
  title: "Longest Nice Substring",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/longest-nice-substring/",
  summary: "A letter missing its opposite case can't be in a nice substring, so it splits the range — recurse and take the longer piece.",
  prompt:
    "A string is nice if every letter it contains appears in both uppercase and lowercase. Return the " +
    "longest nice substring (the earliest one on ties), or \"\" if none.",
  topics: ["Hash Table", "String", "Divide and Conquer", "Bit Manipulation", "Sliding Window"],
  tags: ["Divide and Conquer", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "YazaAay" }),
  defaultOptions: {},
  buildSteps: (input) => niceSubstrSteps(input.s),
  Renderer: NiceSubstrRenderer,
};
