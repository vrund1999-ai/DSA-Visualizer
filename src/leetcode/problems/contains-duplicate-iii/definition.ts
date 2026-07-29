import type { LeetCodeProblem } from "../../types";
import type { DupIIIData } from "./algorithm";
import { dupIIISteps } from "./algorithm";
import { CODE } from "./code";
import { DupIIIRenderer } from "./DupIIIRenderer";

interface DupIIIInput {
  nums: number[];
  indexDiff: number;
  valueDiff: number;
}

export const containsDuplicateIIIProblem: LeetCodeProblem<DupIIIInput, DupIIIData, Record<string, never>> = {
  id: "contains-duplicate-iii",
  number: 220,
  title: "Contains Duplicate III",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/contains-duplicate-iii/",
  summary: "Bucket values by width t+1; check own and neighbor buckets within a k-index sliding window.",
  prompt:
    "Return true if there are two indices i, j with |i − j| ≤ indexDiff and |nums[i] − nums[j]| ≤ " +
    "valueDiff.",
  topics: ["Array", "Sliding Window", "Sorting", "Bucket Sort", "Ordered Set"],
  tags: ["Array", "Sliding Window", "Bucket Sort"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 5, 9, 1, 5, 9], indexDiff: 2, valueDiff: 3 }),
  defaultOptions: {},
  buildSteps: (input) => dupIIISteps(input.nums, input.indexDiff, input.valueDiff),
  Renderer: DupIIIRenderer,
};
