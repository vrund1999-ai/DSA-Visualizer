import type { LeetCodeProblem } from "../../types";
import type { TrailingZeroesData } from "./algorithm";
import { trailingZeroesSteps } from "./algorithm";
import { CODE } from "./code";
import { TrailingZeroesRenderer } from "./TrailingZeroesRenderer";

export const factorialTrailingZeroesProblem: LeetCodeProblem<number, TrailingZeroesData, Record<string, never>> = {
  id: "factorial-trailing-zeroes",
  number: 172,
  title: "Factorial Trailing Zeroes",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/factorial-trailing-zeroes/",
  summary: "Count factors of 5 via Legendre's formula ⌊n/5⌋ + ⌊n/25⌋ + …",
  prompt:
    "Given an integer n, return the number of trailing zeros in n! (n factorial). Aim " +
    "for logarithmic time rather than computing the factorial.",
  topics: ["Math"],
  tags: ["Math"],
  companies: ["Bloomberg"],
  frequency: 45.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 100,
  defaultOptions: {},
  buildSteps: (input) => trailingZeroesSteps(input),
  Renderer: TrailingZeroesRenderer,
};
