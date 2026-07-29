import type { LeetCodeProblem } from "../../types";
import type { EqualPairsData } from "./algorithm";
import { equalPairsSteps } from "./algorithm";
import { CODE } from "./code";
import { EqualPairsRenderer } from "./EqualPairsRenderer";

export const divideArrayEqualPairsProblem: LeetCodeProblem<number[], EqualPairsData, Record<string, never>> = {
  id: "divide-array-into-equal-pairs",
  number: 2206,
  title: "Divide Array Into Equal Pairs",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/divide-array-into-equal-pairs/",
  summary: "The array pairs up iff every value occurs an even number of times.",
  prompt:
    "Given an array of 2n integers, return true if it can be split into n pairs where each pair holds " +
    "two equal values.",
  topics: ["Array", "Hash Table", "Bit Manipulation", "Counting"],
  tags: ["Array", "Hash Table", "Counting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 2, 3, 2, 2, 2],
  defaultOptions: {},
  buildSteps: (input) => equalPairsSteps(input),
  Renderer: EqualPairsRenderer,
};
