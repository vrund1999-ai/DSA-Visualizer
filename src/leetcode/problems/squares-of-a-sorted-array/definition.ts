import type { LeetCodeProblem } from "../../types";
import type { SquaresData } from "./algorithm";
import { squaresSteps } from "./algorithm";
import { CODE } from "./code";
import { SquaresRenderer } from "./SquaresRenderer";

export const squaresSortedProblem: LeetCodeProblem<
  number[],
  SquaresData,
  Record<string, never>
> = {
  id: "squares-of-a-sorted-array",
  number: 977,
  title: "Squares of a Sorted Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
  summary: "Sorted squares in O(n) using two pointers.",
  prompt:
    "Given a sorted array `nums`, return an array of the squares of each number, " +
    "also sorted in non-decreasing order, in O(n) time.",
  topics: ["Array", "Two Pointers", "Sorting"],
  tags: ["Array", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 42.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [-4, -1, 0, 3, 10],
  defaultOptions: {},
  buildSteps: (input) => squaresSteps(input),
  Renderer: SquaresRenderer,
};
