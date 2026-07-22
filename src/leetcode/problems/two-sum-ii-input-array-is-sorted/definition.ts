import type { LeetCodeProblem } from "../../types";
import type { TwoSumIIData, TwoSumIIInput } from "./algorithm";
import { twoSumIISteps } from "./algorithm";
import { CODE } from "./code";
import { TwoSumIIRenderer } from "./TwoSumIIRenderer";

export const twoSumIIProblem: LeetCodeProblem<
  TwoSumIIInput,
  TwoSumIIData,
  Record<string, never>
> = {
  id: "two-sum-ii-input-array-is-sorted",
  number: 167,
  title: "Two Sum II - Input Array Is Sorted",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
  summary: "Find the pair summing to target with two pointers.",
  prompt:
    "Given a 1-indexed sorted array `numbers` and a `target`, return the " +
    "1-indexed positions of the two numbers that add up to target. Use O(1) " +
    "extra space.",
  topics: ["Array", "Two Pointers", "Binary Search"],
  tags: ["Array", "Two Pointers", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 48.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ numbers: [2, 7, 11, 15], target: 9 }),
  defaultOptions: {},
  buildSteps: (input) => twoSumIISteps(input),
  Renderer: TwoSumIIRenderer,
};
