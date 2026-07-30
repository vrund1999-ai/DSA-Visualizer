import type { LeetCodeProblem } from "../../types";
import type { ArithData } from "./algorithm";
import { arithSteps } from "./algorithm";
import { CODE } from "./code";
import { ArithRenderer } from "./ArithRenderer";

export const longestArithmeticSeqProblem: LeetCodeProblem<number[], ArithData, Record<string, never>> = {
  id: "longest-arithmetic-subsequence",
  number: 1027,
  title: "Longest Arithmetic Subsequence",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
  summary: "Per index, keep a map from common difference to the longest arithmetic run ending there.",
  prompt: "Given an array nums, return the length of the longest arithmetic subsequence (equal consecutive differences).",
  topics: ["Array", "Hash Table", "Dynamic Programming"],
  tags: ["Dynamic Programming", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => [9, 4, 7, 2, 10],
  defaultOptions: {},
  buildSteps: (input) => arithSteps(input),
  Renderer: ArithRenderer,
};
