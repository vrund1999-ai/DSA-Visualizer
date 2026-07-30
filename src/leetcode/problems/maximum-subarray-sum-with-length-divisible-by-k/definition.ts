import type { LeetCodeProblem } from "../../types";
import type { MaxSubKData } from "./algorithm";
import { maxSubKSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxSubKRenderer } from "./MaxSubKRenderer";

interface MaxSubKInput {
  nums: number[];
  k: number;
}

export const maxSubarraySumDivKProblem: LeetCodeProblem<MaxSubKInput, MaxSubKData, Record<string, never>> = {
  id: "maximum-subarray-sum-with-length-divisible-by-k",
  number: 3381,
  title: "Maximum Subarray Sum With Length Divisible by K",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/",
  summary: "Prefix sums grouped by index residue mod k; subtract the smallest same-residue prefix to maximize.",
  prompt:
    "Return the maximum sum of a non-empty subarray of nums whose length is divisible by k.",
  topics: ["Array", "Prefix Sum"],
  tags: ["Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [-5, 1, 2, -3, 4], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => maxSubKSteps(input.nums, input.k),
  Renderer: MaxSubKRenderer,
};
