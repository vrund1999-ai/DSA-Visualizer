import type { LeetCodeProblem } from "../../types";
import type { CombinationData } from "./algorithm";
import { combinationSteps } from "./algorithm";
import { CODE } from "./code";
import { CombinationRenderer } from "./CombinationRenderer";

interface CombinationInput {
  candidates: number[];
  target: number;
}

export const combinationSumIIProblem: LeetCodeProblem<CombinationInput, CombinationData, Record<string, never>> = {
  id: "combination-sum-ii",
  number: 40,
  title: "Combination Sum II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/combination-sum-ii/",
  summary: "Backtracking over sorted candidates; each used once, duplicate branches skipped.",
  prompt:
    "Given a collection of candidate numbers (with duplicates) and a target, find all " +
    "unique combinations where the numbers sum to target. Each number may be used once " +
    "per combination.",
  topics: ["Array", "Backtracking"],
  tags: ["Array", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 44.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(2^n)", timeWorst: "O(2^n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ candidates: [10, 1, 2, 7, 6, 1, 5], target: 8 }),
  defaultOptions: {},
  buildSteps: (input) => combinationSteps(input.candidates, input.target),
  Renderer: CombinationRenderer,
};
