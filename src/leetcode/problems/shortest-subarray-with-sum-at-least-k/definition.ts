import type { LeetCodeProblem } from "../../types";
import type { ShortestSubarrayData } from "./algorithm";
import { shortestSubarraySteps } from "./algorithm";
import { CODE } from "./code";
import { ShortestSubarrayRenderer } from "./ShortestSubarrayRenderer";

interface ShortestSubarrayInput {
  nums: number[];
  k: number;
}

export const shortestSubarrayProblem: LeetCodeProblem<ShortestSubarrayInput, ShortestSubarrayData, Record<string, never>> = {
  id: "shortest-subarray-with-sum-at-least-k",
  number: 862,
  title: "Shortest Subarray with Sum at Least K",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
  summary: "On prefix sums, a monotonic deque of increasing values yields the shortest window with sum ≥ k even with negatives.",
  prompt:
    "Return the length of the shortest non-empty contiguous subarray with sum at least k (values may be " +
    "negative), or -1 if none exists.",
  topics: ["Array", "Binary Search", "Queue", "Sliding Window", "Prefix Sum", "Monotonic Queue"],
  tags: ["Monotonic Queue", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [2, -1, 2, 3, -4, 5], k: 5 }),
  defaultOptions: {},
  buildSteps: (input) => shortestSubarraySteps(input.nums, input.k),
  Renderer: ShortestSubarrayRenderer,
};
