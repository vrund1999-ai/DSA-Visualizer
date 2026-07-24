import type { LeetCodeProblem } from "../../types";
import type { FibData } from "./algorithm";
import { fibSteps } from "./algorithm";
import { CODE } from "./code";
import { FibRenderer } from "./FibRenderer";

export const fibonacciProblem: LeetCodeProblem<
  number,
  FibData,
  Record<string, never>
> = {
  id: "fibonacci-number",
  number: 509,
  title: "Fibonacci Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/fibonacci-number/",
  summary: "Compute fib(n) with bottom-up DP.",
  prompt:
    "The Fibonacci numbers start 0, 1 and each subsequent number is the sum of " +
    "the previous two. Given `n`, return fib(n).",
  topics: ["Math", "Dynamic Programming", "Recursion", "Memoization"],
  tags: ["Math", "Dynamic Programming", "Recursion", "Memoization"],
  companies: ["Bloomberg"],
  frequency: 49.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 9,
  defaultOptions: {},
  buildSteps: (input) => fibSteps(input),
  Renderer: FibRenderer,
};
