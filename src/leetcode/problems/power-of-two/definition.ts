import type { LeetCodeProblem } from "../../types";
import type { PowerOfTwoData } from "./algorithm";
import { powerOfTwoSteps } from "./algorithm";
import { CODE } from "./code";
import { PowerOfTwoRenderer } from "./PowerOfTwoRenderer";

export const powerOfTwoProblem: LeetCodeProblem<
  number,
  PowerOfTwoData,
  Record<string, never>
> = {
  id: "power-of-two",
  number: 231,
  title: "Power of Two",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/power-of-two/",
  summary: "One-set-bit test via n & (n − 1).",
  prompt:
    "Given an integer `n`, return true if it is a power of two (n = 2^k for some " +
    "k ≥ 0).",
  topics: ["Math", "Bit Manipulation", "Recursion"],
  tags: ["Math", "Bit Manipulation", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 45.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 16,
  defaultOptions: {},
  buildSteps: (input) => powerOfTwoSteps(input),
  Renderer: PowerOfTwoRenderer,
};
