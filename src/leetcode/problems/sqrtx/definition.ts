import type { LeetCodeProblem } from "../../types";
import type { SqrtData } from "./algorithm";
import { sqrtSteps } from "./algorithm";
import { CODE } from "./code";
import { SqrtRenderer } from "./SqrtRenderer";

export const sqrtxProblem: LeetCodeProblem<
  number,
  SqrtData,
  Record<string, never>
> = {
  id: "sqrtx",
  number: 69,
  title: "Sqrt(x)",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/sqrtx/",
  summary: "Integer square root via binary search.",
  prompt:
    "Given a non-negative integer `x`, return the integer square root of x " +
    "(rounded down), without using any built-in exponent function.",
  topics: ["Math", "Binary Search"],
  tags: ["Math", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 62.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log x)", timeWorst: "O(log x)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 24,
  defaultOptions: {},
  buildSteps: (input) => sqrtSteps(input),
  Renderer: SqrtRenderer,
};
