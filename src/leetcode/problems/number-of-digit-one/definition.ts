import type { LeetCodeProblem } from "../../types";
import type { DigitOneData } from "./algorithm";
import { digitOneSteps } from "./algorithm";
import { CODE } from "./code";
import { DigitOneRenderer } from "./DigitOneRenderer";

export const numberOfDigitOneProblem: LeetCodeProblem<number, DigitOneData, Record<string, never>> = {
  id: "number-of-digit-one",
  number: 233,
  title: "Number of Digit One",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/number-of-digit-one/",
  summary: "Sum the 1s contributed at each place value using high | cur | low split.",
  prompt:
    "Given an integer n, count the total number of times the digit 1 appears in all numbers " +
    "from 1 to n inclusive.",
  topics: ["Math", "Dynamic Programming", "Recursion"],
  tags: ["Math", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 213,
  defaultOptions: {},
  buildSteps: (input) => digitOneSteps(input),
  Renderer: DigitOneRenderer,
};
