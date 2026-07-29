import type { LeetCodeProblem } from "../../types";
import type { ComboData } from "./algorithm";
import { comboSteps } from "./algorithm";
import { CODE } from "./code";
import { ComboRenderer } from "./ComboRenderer";

interface ComboInput {
  k: number;
  n: number;
}

export const combinationSumIIIProblem: LeetCodeProblem<ComboInput, ComboData, Record<string, never>> = {
  id: "combination-sum-iii",
  number: 216,
  title: "Combination Sum III",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/combination-sum-iii/",
  summary: "Backtrack over strictly-increasing digits 1-9, pruning once a digit exceeds the remaining sum.",
  prompt:
    "Find all combinations of k distinct numbers from 1 to 9 that sum to n (each number used at most " +
    "once).",
  topics: ["Array", "Backtracking"],
  tags: ["Array", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(C(9,k))", timeWorst: "O(C(9,k))", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ k: 3, n: 9 }),
  defaultOptions: {},
  buildSteps: (input) => comboSteps(input.k, input.n),
  Renderer: ComboRenderer,
};
