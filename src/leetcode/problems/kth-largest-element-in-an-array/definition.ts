import type { LeetCodeProblem } from "../../types";
import type { KthLargestData, KthLargestInput } from "./algorithm";
import { kthLargestSteps } from "./algorithm";
import { CODE } from "./code";
import { KthLargestRenderer } from "./KthLargestRenderer";

export const kthLargestProblem: LeetCodeProblem<
  KthLargestInput,
  KthLargestData,
  Record<string, never>
> = {
  id: "kth-largest-element-in-an-array",
  number: 215,
  title: "Kth Largest Element in an Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
  summary: "Kth largest value using a size-k min-heap.",
  prompt:
    "Given an integer array `nums` and an integer `k`, return the kth largest " +
    "element (in sorted order, not necessarily distinct).",
  topics: ["Array", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Quickselect"],
  tags: ["Array", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Quickselect"],
  companies: ["Bloomberg"],
  frequency: 55.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log k)", timeWorst: "O(n log k)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [3, 2, 1, 5, 6, 4], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => kthLargestSteps(input),
  Renderer: KthLargestRenderer,
};
