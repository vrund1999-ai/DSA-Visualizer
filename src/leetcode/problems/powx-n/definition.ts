import type { LeetCodeProblem } from "../../types";
import type { PowData, PowInput } from "./algorithm";
import { powSteps } from "./algorithm";
import { CODE } from "./code";
import { PowRenderer } from "./PowRenderer";

export const powxnProblem: LeetCodeProblem<
  PowInput,
  PowData,
  Record<string, never>
> = {
  id: "powx-n",
  number: 50,
  title: "Pow(x, n)",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/powx-n/",
  summary: "x^n in O(log n) via exponentiation by squaring.",
  prompt:
    "Implement pow(x, n), which raises `x` to the integer power `n`, in " +
    "O(log n) time.",
  topics: ["Math", "Recursion"],
  tags: ["Math", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 61.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ x: 2, n: 10 }),
  defaultOptions: {},
  buildSteps: (input) => powSteps(input),
  Renderer: PowRenderer,
};
