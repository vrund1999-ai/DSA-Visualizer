import type { LeetCodeProblem } from "../../types";
import type { MissingRepeatedData } from "./algorithm";
import { missingRepeatedSteps } from "./algorithm";
import { CODE } from "./code";
import { MissingRepeatedRenderer } from "./MissingRepeatedRenderer";

export const findMissingRepeatedProblem: LeetCodeProblem<number[][], MissingRepeatedData, Record<string, never>> = {
  id: "find-missing-and-repeated-values",
  number: 2965,
  title: "Find Missing and Repeated Values",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-missing-and-repeated-values/",
  summary: "Tally an n×n grid of 1..n²; find the value seen twice and the one absent.",
  prompt:
    "An n × n grid contains the values 1..n² with exactly one value appearing twice and " +
    "one value missing. Return [repeated, missing].",
  topics: ["Array", "Hash Table", "Math", "Matrix"],
  tags: ["Array", "Hash Table", "Math", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 45.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ],
  defaultOptions: {},
  buildSteps: (input) => missingRepeatedSteps(input),
  Renderer: MissingRepeatedRenderer,
};
