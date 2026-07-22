import type { LeetCodeProblem } from "../../types";
import type { PascalData } from "./algorithm";
import { pascalSteps } from "./algorithm";
import { CODE } from "./code";
import { PascalRenderer } from "./PascalRenderer";

export const pascalsTriangleProblem: LeetCodeProblem<
  number,
  PascalData,
  Record<string, never>
> = {
  id: "pascals-triangle",
  number: 118,
  title: "Pascal's Triangle",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/pascals-triangle/",
  summary: "Build the triangle where each cell sums the two above.",
  prompt:
    "Given an integer `numRows`, return the first numRows of Pascal's triangle, " +
    "where each number is the sum of the two directly above it.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 62.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => 5,
  defaultOptions: {},
  buildSteps: (input) => pascalSteps(input),
  Renderer: PascalRenderer,
};
