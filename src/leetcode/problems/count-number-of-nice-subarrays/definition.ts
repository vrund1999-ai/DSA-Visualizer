import type { LeetCodeProblem } from "../../types";
import type { NiceData } from "./algorithm";
import { niceSteps } from "./algorithm";
import { CODE } from "./code";
import { NiceRenderer } from "./NiceRenderer";

interface NiceInput {
  nums: number[];
  k: number;
}

export const countNiceSubarraysProblem: LeetCodeProblem<NiceInput, NiceData, Record<string, never>> = {
  id: "count-number-of-nice-subarrays",
  number: 1248,
  title: "Count Number of Nice Subarrays",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
  summary: "Treat odd numbers as 1s; count subarrays whose odd-prefix difference equals k via a frequency map.",
  prompt: "Given an array nums and an integer k, return the number of contiguous subarrays containing exactly k odd numbers.",
  topics: ["Array", "Hash Table", "Math", "Sliding Window", "Prefix Sum"],
  tags: ["Array", "Hash Table", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 1, 2, 1, 1], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => niceSteps(input.nums, input.k),
  Renderer: NiceRenderer,
};
