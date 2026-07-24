import type { LeetCodeProblem } from "../../types";
import type { AddDigitsData } from "./algorithm";
import { addDigitsSteps } from "./algorithm";
import { CODE } from "./code";
import { AddDigitsRenderer } from "./AddDigitsRenderer";

export const addDigitsProblem: LeetCodeProblem<number, AddDigitsData, Record<string, never>> = {
  id: "add-digits",
  number: 258,
  title: "Add Digits",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/add-digits/",
  summary: "Iteratively sum digits down to the single-digit digital root.",
  prompt:
    "Given an integer num, repeatedly add all its digits until the result has only one " +
    "digit, and return it. (A closed form exists via 1 + (num − 1) % 9.)",
  topics: ["Math", "Simulation", "Number Theory"],
  tags: ["Math", "Simulation", "Number Theory"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 38,
  defaultOptions: {},
  buildSteps: (input) => addDigitsSteps(input),
  Renderer: AddDigitsRenderer,
};
