import type { LeetCodeProblem } from "../../types";
import type { FairPairsData } from "./algorithm";
import { fairPairsSteps } from "./algorithm";
import { CODE } from "./code";
import { FairPairsRenderer } from "./FairPairsRenderer";

interface FairPairsInput {
  nums: number[];
  lower: number;
  upper: number;
}

export const countFairPairsProblem: LeetCodeProblem<FairPairsInput, FairPairsData, Record<string, never>> = {
  id: "count-the-number-of-fair-pairs",
  number: 2563,
  title: "Count the Number of Fair Pairs",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-the-number-of-fair-pairs/",
  summary: "Sort, then count pairs summing ≤ upper minus pairs summing ≤ lower−1 with two pointers.",
  prompt:
    "A fair pair (i < j) has lower ≤ nums[i] + nums[j] ≤ upper. Given nums and the bounds, return the " +
    "number of fair pairs.",
  topics: ["Array", "Two Pointers", "Binary Search", "Sorting"],
  tags: ["Array", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [0, 1, 7, 4, 4, 5], lower: 3, upper: 6 }),
  defaultOptions: {},
  buildSteps: (input) => fairPairsSteps(input.nums, input.lower, input.upper),
  Renderer: FairPairsRenderer,
};
