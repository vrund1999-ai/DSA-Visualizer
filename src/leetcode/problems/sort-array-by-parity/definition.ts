import type { LeetCodeProblem } from "../../types";
import type { ParityData } from "./algorithm";
import { paritySteps } from "./algorithm";
import { CODE } from "./code";
import { ParityRenderer } from "./ParityRenderer";

export const sortArrayByParityProblem: LeetCodeProblem<number[], ParityData, Record<string, never>> = {
  id: "sort-array-by-parity",
  number: 905,
  title: "Sort Array By Parity",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/sort-array-by-parity/",
  summary: "Two pointers partition even numbers before odd numbers in place.",
  prompt:
    "Given an integer array nums, move all the even integers to the front followed by all " +
    "the odd integers. Any order within each group is acceptable.",
  topics: ["Array", "Two Pointers", "Sorting"],
  tags: ["Array", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 1, 2, 4, 7, 6],
  defaultOptions: {},
  buildSteps: (input) => paritySteps(input),
  Renderer: ParityRenderer,
};
