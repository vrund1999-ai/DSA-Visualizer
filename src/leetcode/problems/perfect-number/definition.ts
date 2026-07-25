import type { LeetCodeProblem } from "../../types";
import type { PerfectData } from "./algorithm";
import { perfectSteps } from "./algorithm";
import { CODE } from "./code";
import { PerfectRenderer } from "./PerfectRenderer";

export const perfectNumberProblem: LeetCodeProblem<number, PerfectData, Record<string, never>> = {
  id: "perfect-number",
  number: 507,
  title: "Perfect Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/perfect-number/",
  summary: "Sum proper divisors by scanning to √num in pairs; check the total equals num.",
  prompt:
    "A perfect number equals the sum of its positive divisors excluding itself. Given an " +
    "integer num, return whether it is a perfect number.",
  topics: ["Math"],
  tags: ["Math"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(√n)", timeWorst: "O(√n)", space: "O(√n)" },
  inputSchema: [],
  makeDefaultInput: () => 28,
  defaultOptions: {},
  buildSteps: (input) => perfectSteps(input),
  Renderer: PerfectRenderer,
};
