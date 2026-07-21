import type { LeetCodeProblem } from "../../types";
import type { TwoSumData, TwoSumInput, TwoSumOptions } from "./types";
import { twoSumSteps } from "./algorithm";
import { TWO_SUM_CODE } from "./code";
import { TwoSumRenderer } from "./TwoSumRenderer";

export const twoSumProblem: LeetCodeProblem<
  TwoSumInput,
  TwoSumData,
  TwoSumOptions
> = {
  id: "two-sum",
  number: 1,
  title: "Two Sum",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/two-sum/",
  summary: "Find two indices whose values add up to a target.",
  prompt:
    "Given an array of integers `nums` and an integer `target`, return the " +
    "indices of the two numbers that add up to `target`. You may assume each " +
    "input has exactly one solution, and you may not use the same element twice.",
  topics: ["Array", "Hash Table"],
  tags: ["Array", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 100,
  code: TWO_SUM_CODE,
  language: "javascript",
  complexity: {
    timeAverage: "O(n)",
    timeWorst: "O(n)",
    space: "O(n)",
  },
  inputSchema: [],
  // A fixed example that fills the hash map before the match, so the one-pass
  // idea is visible: 11 + 9 = 20, found at indices 2 and 4.
  makeDefaultInput: () => ({ nums: [2, 7, 11, 15, 9], target: 20 }),
  defaultOptions: {},
  buildSteps: (input) => twoSumSteps(input),
  Renderer: TwoSumRenderer,
};
