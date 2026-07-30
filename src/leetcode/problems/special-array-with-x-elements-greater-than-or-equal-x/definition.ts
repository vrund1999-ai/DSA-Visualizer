import type { LeetCodeProblem } from "../../types";
import type { SpecialArrayData } from "./algorithm";
import { specialArraySteps } from "./algorithm";
import { CODE } from "./code";
import { SpecialArrayRenderer } from "./SpecialArrayRenderer";

export const specialArrayProblem: LeetCodeProblem<number[], SpecialArrayData, Record<string, never>> = {
  id: "special-array-with-x-elements-greater-than-or-equal-x",
  number: 1608,
  title: "Special Array With X Elements Greater Than or Equal X",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/",
  summary: "The count of elements ≥ x is non-increasing in x; find where exactly x elements are ≥ x.",
  prompt:
    "An array is special if there exists a number x such that exactly x elements are greater than or equal " +
    "to x. Return that x, or -1 if none exists.",
  topics: ["Array", "Binary Search", "Sorting", "Counting"],
  tags: ["Sorting", "Counting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 4, 3, 0, 4],
  defaultOptions: {},
  buildSteps: (input) => specialArraySteps(input),
  Renderer: SpecialArrayRenderer,
};
