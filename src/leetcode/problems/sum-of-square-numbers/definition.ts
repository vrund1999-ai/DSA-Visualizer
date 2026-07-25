import type { LeetCodeProblem } from "../../types";
import type { SquareSumData } from "./algorithm";
import { squareSumSteps } from "./algorithm";
import { CODE } from "./code";
import { SquareSumRenderer } from "./SquareSumRenderer";

export const sumOfSquareNumbersProblem: LeetCodeProblem<number, SquareSumData, Record<string, never>> = {
  id: "sum-of-square-numbers",
  number: 633,
  title: "Sum of Square Numbers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sum-of-square-numbers/",
  summary: "Two pointers over [0, √c] converge on a² + b² = c.",
  prompt:
    "Given a non-negative integer c, decide whether there exist non-negative integers a " +
    "and b such that a² + b² = c.",
  topics: ["Math", "Two Pointers", "Binary Search"],
  tags: ["Math", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(√c)", timeWorst: "O(√c)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 65,
  defaultOptions: {},
  buildSteps: (input) => squareSumSteps(input),
  Renderer: SquareSumRenderer,
};
