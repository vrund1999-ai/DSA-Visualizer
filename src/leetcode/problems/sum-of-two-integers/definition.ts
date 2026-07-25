import type { LeetCodeProblem } from "../../types";
import type { SumBitsData } from "./algorithm";
import { sumBitsSteps } from "./algorithm";
import { CODE } from "./code";
import { SumBitsRenderer } from "./SumBitsRenderer";

interface SumBitsInput {
  a: number;
  b: number;
}

export const sumOfTwoIntegersProblem: LeetCodeProblem<SumBitsInput, SumBitsData, Record<string, never>> = {
  id: "sum-of-two-integers",
  number: 371,
  title: "Sum of Two Integers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sum-of-two-integers/",
  summary: "XOR adds bits without carry; AND<<1 is the carry — iterate until it's zero.",
  prompt:
    "Compute the sum of two integers a and b without using the + or − operators, using " +
    "bit manipulation.",
  topics: ["Math", "Bit Manipulation"],
  tags: ["Math", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(32)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ a: 11, b: 6 }),
  defaultOptions: {},
  buildSteps: (input) => sumBitsSteps(input.a, input.b),
  Renderer: SumBitsRenderer,
};
