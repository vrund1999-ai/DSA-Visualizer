import type { LeetCodeProblem } from "../../types";
import type { CombinationSumData, CombinationSumInput } from "./algorithm";
import { combinationSumSteps } from "./algorithm";
import { CODE } from "./code";
import { CombinationSumRenderer } from "./CombinationSumRenderer";

export const combinationSumProblem: LeetCodeProblem<
  CombinationSumInput,
  CombinationSumData,
  Record<string, never>
> = {
  id: "combination-sum",
  number: 39,
  title: "Combination Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/combination-sum/",
  summary: "All combinations summing to a target (backtracking, reuse allowed).",
  prompt:
    "Given distinct `candidates` and a `target`, return all unique combinations " +
    "where the chosen numbers sum to target. The same number may be used " +
    "unlimited times.",
  topics: ["Array", "Backtracking"],
  tags: ["Array", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 52.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(2^t)", timeWorst: "O(2^t)", space: "O(t)" },
  inputSchema: [],
  makeDefaultInput: () => ({ candidates: [2, 3, 6, 7], target: 7 }),
  defaultOptions: {},
  buildSteps: (input) => combinationSumSteps(input),
  Renderer: CombinationSumRenderer,
};
