import type { LeetCodeProblem } from "../../types";
import type { SubsetsIIData } from "./algorithm";
import { subsetsIISteps } from "./algorithm";
import { CODE } from "./code";
import { SubsetsIIRenderer } from "./SubsetsIIRenderer";

export const subsetsIIProblem: LeetCodeProblem<
  number[],
  SubsetsIIData,
  Record<string, never>
> = {
  id: "subsets-ii",
  number: 90,
  title: "Subsets II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/subsets-ii/",
  summary: "Power set of an array with duplicates, no repeats.",
  prompt:
    "Given an integer array `nums` that may contain duplicates, return all " +
    "possible subsets (the power set). The solution must not contain duplicate " +
    "subsets.",
  topics: ["Array", "Backtracking", "Bit Manipulation"],
  tags: ["Array", "Backtracking", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 47.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·2ⁿ)", timeWorst: "O(n·2ⁿ)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 2],
  defaultOptions: {},
  buildSteps: (input) => subsetsIISteps(input),
  Renderer: SubsetsIIRenderer,
};
