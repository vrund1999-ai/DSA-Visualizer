import type { LeetCodeProblem } from "../../types";
import type { UglyData } from "./algorithm";
import { uglySteps } from "./algorithm";
import { CODE } from "./code";
import { UglyRenderer } from "./UglyRenderer";

export const uglyNumberProblem: LeetCodeProblem<number, UglyData, Record<string, never>> = {
  id: "ugly-number",
  number: 263,
  title: "Ugly Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/ugly-number/",
  summary: "Divide out all factors of 2, 3, 5; a leftover of 1 means it's ugly.",
  prompt: "An ugly number is a positive integer whose only prime factors are 2, 3, and 5. Return whether n is ugly.",
  topics: ["Math"],
  tags: ["Math"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => 30,
  defaultOptions: {},
  buildSteps: (input) => uglySteps(input),
  Renderer: UglyRenderer,
};
