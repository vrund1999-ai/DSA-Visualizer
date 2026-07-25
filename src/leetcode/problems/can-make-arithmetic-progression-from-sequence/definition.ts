import type { LeetCodeProblem } from "../../types";
import type { ArithProgData } from "./algorithm";
import { arithProgSteps } from "./algorithm";
import { CODE } from "./code";
import { ArithProgRenderer } from "./ArithProgRenderer";

export const canMakeArithmeticProgressionProblem: LeetCodeProblem<number[], ArithProgData, Record<string, never>> = {
  id: "can-make-arithmetic-progression-from-sequence",
  number: 1502,
  title: "Can Make Arithmetic Progression From Sequence",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/",
  summary: "Sort, then confirm every adjacent difference equals the first one.",
  prompt:
    "Given an array of numbers, decide whether they can be rearranged into an arithmetic " +
    "progression (equal difference between consecutive terms).",
  topics: ["Array", "Sorting"],
  tags: ["Array", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 5, 1],
  defaultOptions: {},
  buildSteps: (input) => arithProgSteps(input),
  Renderer: ArithProgRenderer,
};
