import type { LeetCodeProblem } from "../../types";
import type { SetMismatchData } from "./algorithm";
import { setMismatchSteps } from "./algorithm";
import { CODE } from "./code";
import { SetMismatchRenderer } from "./SetMismatchRenderer";

export const setMismatchProblem: LeetCodeProblem<
  number[],
  SetMismatchData,
  Record<string, never>
> = {
  id: "set-mismatch",
  number: 645,
  title: "Set Mismatch",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/set-mismatch/",
  summary: "Find the duplicated and missing values in 1..n.",
  prompt:
    "An array `nums` should contain 1..n, but one number is duplicated in place " +
    "of another that's missing. Return [duplicate, missing].",
  topics: ["Array", "Hash Table", "Bit Manipulation", "Sorting"],
  tags: ["Array", "Hash Table", "Bit Manipulation", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 2, 4],
  defaultOptions: {},
  buildSteps: (input) => setMismatchSteps(input),
  Renderer: SetMismatchRenderer,
};
