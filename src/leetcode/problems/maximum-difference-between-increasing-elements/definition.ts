import type { LeetCodeProblem } from "../../types";
import type { MaxDiffData } from "./algorithm";
import { maxDiffSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxDiffRenderer } from "./MaxDiffRenderer";

interface MaxDiffInput {
  nums: number[];
}

export const maxDiffIncreasingProblem: LeetCodeProblem<MaxDiffInput, MaxDiffData, Record<string, never>> = {
  id: "maximum-difference-between-increasing-elements",
  number: 2016,
  title: "Maximum Difference Between Increasing Elements",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/maximum-difference-between-increasing-elements/",
  summary: "Track the smallest value to the left; each larger element gives a candidate difference nums[j] − min.",
  prompt:
    "Return the maximum value of nums[j] − nums[i] over indices i < j with nums[i] < nums[j], or -1 if no " +
    "such pair exists.",
  topics: ["Array"],
  tags: ["Array", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [7, 1, 5, 4] }),
  defaultOptions: {},
  buildSteps: (input) => maxDiffSteps(input.nums),
  Renderer: MaxDiffRenderer,
};
