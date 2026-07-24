import type { LeetCodeProblem } from "../../types";
import type { LargestNumberData } from "./algorithm";
import { largestNumberSteps } from "./algorithm";
import { CODE } from "./code";
import { LargestNumberRenderer } from "./LargestNumberRenderer";

export const largestNumberProblem: LeetCodeProblem<number[], LargestNumberData, Record<string, never>> = {
  id: "largest-number",
  number: 179,
  title: "Largest Number",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/largest-number/",
  summary: "Sort by the a+b vs b+a concatenation comparator, then join.",
  prompt:
    "Given a list of non-negative integers, arrange them so that they form the largest " +
    "possible number, and return it as a string.",
  topics: ["Array", "String", "Greedy", "Sorting", "Comparator"],
  tags: ["Array", "String", "Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 42.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n · k)", timeWorst: "O(n log n · k)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 30, 34, 5, 9],
  defaultOptions: {},
  buildSteps: (input) => largestNumberSteps(input),
  Renderer: LargestNumberRenderer,
};
