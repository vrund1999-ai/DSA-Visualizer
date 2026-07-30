import type { LeetCodeProblem } from "../../types";
import type { SmallestOrData } from "./algorithm";
import { smallestOrSteps } from "./algorithm";
import { CODE } from "./code";
import { SmallestOrRenderer } from "./SmallestOrRenderer";

export const smallestSubarraysMaxOrProblem: LeetCodeProblem<number[], SmallestOrData, Record<string, never>> = {
  id: "smallest-subarrays-with-maximum-bitwise-or",
  number: 2411,
  title: "Smallest Subarrays With Maximum Bitwise OR",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/",
  summary: "For each start, the subarray must reach the nearest occurrence of every bit appearing to its right.",
  prompt:
    "For each index i, find the length of the shortest subarray starting at i whose bitwise OR equals the " +
    "OR of nums[i..n-1] (the maximum achievable from i).",
  topics: ["Array", "Binary Search", "Bit Manipulation", "Sliding Window"],
  tags: ["Bit Manipulation", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(30n)", timeWorst: "O(30n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 0, 2, 1, 3],
  defaultOptions: {},
  buildSteps: (input) => smallestOrSteps(input),
  Renderer: SmallestOrRenderer,
};
