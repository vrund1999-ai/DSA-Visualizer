import type { LeetCodeProblem } from "../../types";
import type { PerfectSquareData } from "./algorithm";
import { perfectSquareSteps } from "./algorithm";
import { CODE } from "./code";
import { PerfectSquareRenderer } from "./PerfectSquareRenderer";

export const validPerfectSquareProblem: LeetCodeProblem<number, PerfectSquareData, Record<string, never>> = {
  id: "valid-perfect-square",
  number: 367,
  title: "Valid Perfect Square",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/valid-perfect-square/",
  summary: "Binary-search an integer m whose square equals num, exploiting m² being monotonic.",
  prompt: "Given a positive integer num, return true if it is a perfect square (m·m for some integer m), without using any built-in square-root function.",
  topics: ["Math", "Binary Search"],
  tags: ["Math", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 144,
  defaultOptions: {},
  buildSteps: (input) => perfectSquareSteps(input),
  Renderer: PerfectSquareRenderer,
};
