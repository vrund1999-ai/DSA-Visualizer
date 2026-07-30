import type { LeetCodeProblem } from "../../types";
import type { DuplicateZerosData } from "./algorithm";
import { duplicateZerosSteps } from "./algorithm";
import { CODE } from "./code";
import { DuplicateZerosRenderer } from "./DuplicateZerosRenderer";

interface DuplicateZerosInput {
  arr: number[];
}

export const duplicateZerosProblem: LeetCodeProblem<DuplicateZerosInput, DuplicateZerosData, Record<string, never>> = {
  id: "duplicate-zeros",
  number: 1089,
  title: "Duplicate Zeros",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/duplicate-zeros/",
  summary: "Rebuild left to right, writing each zero twice; the fixed length drops anything shifted off the end.",
  prompt:
    "Given a fixed-length array, duplicate each occurrence of zero, shifting the remaining elements right. " +
    "Elements beyond the original length are discarded; modify the array in place.",
  topics: ["Array", "Two Pointers"],
  tags: ["Two Pointers", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr: [1, 0, 2, 3, 0, 4, 5, 0] }),
  defaultOptions: {},
  buildSteps: (input) => duplicateZerosSteps(input.arr),
  Renderer: DuplicateZerosRenderer,
};
