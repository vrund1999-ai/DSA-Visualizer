import type { LeetCodeProblem } from "../../types";
import type { TribData } from "./algorithm";
import { tribSteps } from "./algorithm";
import { CODE } from "./code";
import { TribRenderer } from "./TribRenderer";

export const nthTribonacciProblem: LeetCodeProblem<number, TribData, Record<string, never>> = {
  id: "n-th-tribonacci-number",
  number: 1137,
  title: "N-th Tribonacci Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/n-th-tribonacci-number/",
  summary: "Slide a window of the last three values, summing them to build each next term.",
  prompt: "The Tribonacci sequence: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2. Return Tn.",
  topics: ["Math", "Dynamic Programming", "Memoization"],
  tags: ["Math", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 8,
  defaultOptions: {},
  buildSteps: (input) => tribSteps(input),
  Renderer: TribRenderer,
};
