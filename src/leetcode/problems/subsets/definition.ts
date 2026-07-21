import type { LeetCodeProblem } from "../../types";
import type { SubsetsData } from "./algorithm";
import { subsetsSteps } from "./algorithm";
import { CODE } from "./code";
import { SubsetsRenderer } from "./SubsetsRenderer";

export const subsetsProblem: LeetCodeProblem<
  number[],
  SubsetsData,
  Record<string, never>
> = {
  id: "subsets",
  number: 78,
  title: "Subsets",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/subsets/",
  summary: "Generate the power set via backtracking.",
  prompt:
    "Given an integer array `nums` of unique elements, return all possible " +
    "subsets (the power set). The solution set must not contain duplicates.",
  topics: ["Array", "Backtracking", "Bit Manipulation"],
  tags: ["Array", "Backtracking", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 69.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·2ⁿ)", timeWorst: "O(n·2ⁿ)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3],
  defaultOptions: {},
  buildSteps: (input) => subsetsSteps(input),
  Renderer: SubsetsRenderer,
};
