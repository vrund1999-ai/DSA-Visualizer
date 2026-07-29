import type { LeetCodeProblem } from "../../types";
import type { DivisorData } from "./algorithm";
import { divisorSteps } from "./algorithm";
import { CODE } from "./code";
import { DivisorRenderer } from "./DivisorRenderer";

interface DivisorInput {
  nums: number[];
  threshold: number;
}

export const smallestDivisorThresholdProblem: LeetCodeProblem<DivisorInput, DivisorData, Record<string, never>> = {
  id: "find-the-smallest-divisor-given-a-threshold",
  number: 1283,
  title: "Find the Smallest Divisor Given a Threshold",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/",
  summary: "Binary-search the divisor; the sum of ceil(n/d) is monotonic, so keep the smaller feasible half.",
  prompt:
    "Given nums and a threshold, find the smallest positive divisor d such that the sum of ceil(nums[i] / d) " +
    "is ≤ threshold.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log(max))", timeWorst: "O(n log(max))", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 5, 9], threshold: 6 }),
  defaultOptions: {},
  buildSteps: (input) => divisorSteps(input.nums, input.threshold),
  Renderer: DivisorRenderer,
};
