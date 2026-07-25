import type { LeetCodeProblem } from "../../types";
import type { LargestOddData } from "./algorithm";
import { largestOddSteps } from "./algorithm";
import { CODE } from "./code";
import { LargestOddRenderer } from "./LargestOddRenderer";

export const largestOddNumberInStringProblem: LeetCodeProblem<string, LargestOddData, Record<string, never>> = {
  id: "largest-odd-number-in-string",
  number: 1903,
  title: "Largest Odd Number in String",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/largest-odd-number-in-string/",
  summary: "The answer is the longest prefix ending in an odd digit — scan from the right.",
  prompt:
    "Given a string num of digits, return the largest-valued odd integer that is a non-empty " +
    "substring of num, or an empty string if none exists.",
  topics: ["Math", "String", "Greedy"],
  tags: ["Math", "String", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "35427",
  defaultOptions: {},
  buildSteps: (input) => largestOddSteps(input),
  Renderer: LargestOddRenderer,
};
