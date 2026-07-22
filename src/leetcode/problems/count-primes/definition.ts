import type { LeetCodeProblem } from "../../types";
import type { CountPrimesData } from "./algorithm";
import { countPrimesSteps } from "./algorithm";
import { CODE } from "./code";
import { CountPrimesRenderer } from "./CountPrimesRenderer";

export const countPrimesProblem: LeetCodeProblem<
  number,
  CountPrimesData,
  Record<string, never>
> = {
  id: "count-primes",
  number: 204,
  title: "Count Primes",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-primes/",
  summary: "Count primes below n with the Sieve of Eratosthenes.",
  prompt:
    "Given an integer `n`, return the number of prime numbers strictly less than " +
    "n.",
  topics: ["Array", "Math", "Enumeration", "Number Theory"],
  tags: ["Array", "Math", "Enumeration", "Number Theory"],
  companies: ["Bloomberg"],
  frequency: 41.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log log n)", timeWorst: "O(n log log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 30,
  defaultOptions: {},
  buildSteps: (input) => countPrimesSteps(input),
  Renderer: CountPrimesRenderer,
};
