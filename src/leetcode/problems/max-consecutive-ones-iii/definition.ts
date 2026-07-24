import type { LeetCodeProblem } from "../../types";
import type { MaxOnesData } from "./algorithm";
import { maxOnesSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxOnesRenderer } from "./MaxOnesRenderer";

interface MaxOnesInput {
  nums: number[];
  k: number;
}

export const maxConsecutiveOnesIIIProblem: LeetCodeProblem<MaxOnesInput, MaxOnesData, Record<string, never>> = {
  id: "max-consecutive-ones-iii",
  number: 1004,
  title: "Max Consecutive Ones III",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/max-consecutive-ones-iii/",
  summary: "Longest window with at most k zeros (sliding window).",
  prompt:
    "Given a binary array nums and an integer k, return the length of the longest " +
    "subarray of 1s achievable after flipping at most k zeros to ones.",
  topics: ["Array", "Binary Search", "Sliding Window", "Prefix Sum"],
  tags: ["Array", "Sliding Window", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 44.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => maxOnesSteps(input.nums, input.k),
  Renderer: MaxOnesRenderer,
};
