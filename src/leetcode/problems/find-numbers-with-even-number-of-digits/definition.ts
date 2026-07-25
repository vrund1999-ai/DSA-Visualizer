import type { LeetCodeProblem } from "../../types";
import type { EvenDigitsData } from "./algorithm";
import { evenDigitsSteps } from "./algorithm";
import { CODE } from "./code";
import { EvenDigitsRenderer } from "./EvenDigitsRenderer";

export const findNumbersEvenDigitsProblem: LeetCodeProblem<number[], EvenDigitsData, Record<string, never>> = {
  id: "find-numbers-with-even-number-of-digits",
  number: 1295,
  title: "Find Numbers with Even Number of Digits",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/",
  summary: "Count numbers whose decimal representation has an even length.",
  prompt: "Given an array nums of integers, return how many of them contain an even number of digits.",
  topics: ["Array", "Math"],
  tags: ["Array", "Math"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [12, 345, 2, 6, 7896],
  defaultOptions: {},
  buildSteps: (input) => evenDigitsSteps(input),
  Renderer: EvenDigitsRenderer,
};
