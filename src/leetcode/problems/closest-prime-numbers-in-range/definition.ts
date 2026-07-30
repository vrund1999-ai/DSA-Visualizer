import type { LeetCodeProblem } from "../../types";
import type { ClosestPrimeData } from "./algorithm";
import { closestPrimeSteps } from "./algorithm";
import { CODE } from "./code";
import { ClosestPrimeRenderer } from "./ClosestPrimeRenderer";

interface ClosestPrimeInput {
  left: number;
  right: number;
}

export const closestPrimesProblem: LeetCodeProblem<ClosestPrimeInput, ClosestPrimeData, Record<string, never>> = {
  id: "closest-prime-numbers-in-range",
  number: 2523,
  title: "Closest Prime Numbers in Range",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/closest-prime-numbers-in-range/",
  summary: "Sieve the primes up to right, then scan adjacent primes in range for the smallest gap.",
  prompt:
    "Given left and right, find two primes num1 < num2 in [left, right] with the smallest num2 − num1. " +
    "Return [num1, num2], or [-1, -1] if no such pair exists.",
  topics: ["Math", "Number Theory"],
  tags: ["Math", "Number Theory"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(r log log r)", timeWorst: "O(r log log r)", space: "O(r)" },
  inputSchema: [],
  makeDefaultInput: () => ({ left: 10, right: 19 }),
  defaultOptions: {},
  buildSteps: (input) => closestPrimeSteps(input.left, input.right),
  Renderer: ClosestPrimeRenderer,
};
