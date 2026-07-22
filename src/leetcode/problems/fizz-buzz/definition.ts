import type { LeetCodeProblem } from "../../types";
import type { FizzData } from "./algorithm";
import { fizzSteps } from "./algorithm";
import { CODE } from "./code";
import { FizzRenderer } from "./FizzRenderer";

export const fizzBuzzProblem: LeetCodeProblem<
  number,
  FizzData,
  Record<string, never>
> = {
  id: "fizz-buzz",
  number: 412,
  title: "Fizz Buzz",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/fizz-buzz/",
  summary: "Fizz for ÷3, Buzz for ÷5, FizzBuzz for ÷15.",
  prompt:
    "Given an integer `n`, return a string array where each i (1..n) is 'Fizz' " +
    "if divisible by 3, 'Buzz' if by 5, 'FizzBuzz' if by both, otherwise the " +
    "number as a string.",
  topics: ["Math", "String", "Simulation"],
  tags: ["Math", "String", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 39,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 15,
  defaultOptions: {},
  buildSteps: (input) => fizzSteps(input),
  Renderer: FizzRenderer,
};
