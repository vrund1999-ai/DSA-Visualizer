import type { LeetCodeProblem } from "../../types";
import type { PrefixCommonData } from "./algorithm";
import { prefixCommonSteps } from "./algorithm";
import { CODE } from "./code";
import { PrefixCommonRenderer } from "./PrefixCommonRenderer";

interface PrefixCommonInput {
  A: number[];
  B: number[];
}

export const prefixCommonArrayProblem: LeetCodeProblem<PrefixCommonInput, PrefixCommonData, Record<string, never>> = {
  id: "find-the-prefix-common-array-of-two-arrays",
  number: 2657,
  title: "Find the Prefix Common Array of Two Arrays",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/",
  summary: "Count value occurrences across both arrays; a value joins the common set when its count reaches 2.",
  prompt:
    "Given two permutations A and B of 1…n, return an array where entry i is the count of values appearing " +
    "in both A[0..i] and B[0..i].",
  topics: ["Array", "Hash Table", "Bit Manipulation"],
  tags: ["Array", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ A: [1, 3, 2, 4], B: [3, 1, 2, 4] }),
  defaultOptions: {},
  buildSteps: (input) => prefixCommonSteps(input.A, input.B),
  Renderer: PrefixCommonRenderer,
};
