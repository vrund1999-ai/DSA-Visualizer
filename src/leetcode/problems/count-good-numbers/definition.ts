import type { LeetCodeProblem } from "../../types";
import type { GoodNumbersData } from "./algorithm";
import { goodNumbersSteps } from "./algorithm";
import { CODE } from "./code";
import { GoodNumbersRenderer } from "./GoodNumbersRenderer";

export const countGoodNumbersProblem: LeetCodeProblem<number, GoodNumbersData, Record<string, never>> = {
  id: "count-good-numbers",
  number: 1922,
  title: "Count Good Numbers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-good-numbers/",
  summary: "5^evens × 4^odds via fast modular exponentiation.",
  prompt:
    "A digit string of length n is good if every even-indexed digit is even (0,2,4,6,8) " +
    "and every odd-indexed digit is prime (2,3,5,7). Count good numbers of length n, " +
    "modulo 1e9 + 7.",
  topics: ["Math", "Recursion"],
  tags: ["Math", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => 50,
  defaultOptions: {},
  buildSteps: (input) => goodNumbersSteps(input),
  Renderer: GoodNumbersRenderer,
};
