import type { LeetCodeProblem } from "../../types";
import type { FourSumData, FourSumInput } from "./algorithm";
import { fourSumSteps } from "./algorithm";
import { CODE } from "./code";
import { FourSumRenderer } from "./FourSumRenderer";

export const fourSumProblem: LeetCodeProblem<
  FourSumInput,
  FourSumData,
  Record<string, never>
> = {
  id: "4sum",
  number: 18,
  title: "4Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/4sum/",
  summary: "All unique quadruplets summing to target (sort + two pointers).",
  prompt:
    "Given an array `nums` and a `target`, return all unique quadruplets " +
    "[a, b, c, d] whose values sum to target. The solution set must not contain " +
    "duplicate quadruplets.",
  topics: ["Array", "Two Pointers", "Sorting"],
  tags: ["Array", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 62,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n³)", timeWorst: "O(n³)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 0, -1, 0, -2, 2], target: 0 }),
  defaultOptions: {},
  buildSteps: (input) => fourSumSteps(input),
  Renderer: FourSumRenderer,
};
