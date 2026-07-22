import type { LeetCodeProblem } from "../../types";
import type { DuplicateData } from "./algorithm";
import { duplicateSteps } from "./algorithm";
import { CODE } from "./code";
import { DuplicateRenderer } from "./DuplicateRenderer";

export const findDuplicateProblem: LeetCodeProblem<
  number[],
  DuplicateData,
  Record<string, never>
> = {
  id: "find-the-duplicate-number",
  number: 287,
  title: "Find the Duplicate Number",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-the-duplicate-number/",
  summary: "Spot the repeated value with Floyd's cycle detection.",
  prompt:
    "Given an array `nums` of n+1 integers in the range [1, n], exactly one value " +
    "is repeated (possibly several times). Return it without modifying the array " +
    "and using O(1) extra space.",
  topics: ["Array", "Two Pointers", "Binary Search", "Bit Manipulation"],
  tags: ["Array", "Two Pointers", "Binary Search", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 52.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 4, 2, 2],
  defaultOptions: {},
  buildSteps: (input) => duplicateSteps(input),
  Renderer: DuplicateRenderer,
};
