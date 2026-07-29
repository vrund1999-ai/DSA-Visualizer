import type { LeetCodeProblem } from "../../types";
import type { RepeatedSubData } from "./algorithm";
import { repeatedSubSteps } from "./algorithm";
import { CODE } from "./code";
import { RepeatedSubRenderer } from "./RepeatedSubRenderer";

interface RepeatedSubInput {
  nums1: number[];
  nums2: number[];
}

export const maximumRepeatedSubarrayProblem: LeetCodeProblem<RepeatedSubInput, RepeatedSubData, Record<string, never>> = {
  id: "maximum-length-of-repeated-subarray",
  number: 718,
  title: "Maximum Length of Repeated Subarray",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-length-of-repeated-subarray/",
  summary: "dp grid: a match extends the diagonal run by one, and the best cell is the longest common subarray.",
  prompt: "Given two integer arrays, return the maximum length of a subarray that appears in both.",
  topics: ["Array", "Binary Search", "Dynamic Programming", "Sliding Window", "Hashing"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums1: [1, 2, 3, 2, 1], nums2: [3, 2, 1, 4, 7] }),
  defaultOptions: {},
  buildSteps: (input) => repeatedSubSteps(input.nums1, input.nums2),
  Renderer: RepeatedSubRenderer,
};
