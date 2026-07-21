import type { LeetCodeProblem } from "../../types";
import type { TopKData } from "./algorithm";
import { topKSteps } from "./algorithm";
import { CODE } from "./code";
import { TopKRenderer } from "./TopKRenderer";

export interface TopKInput {
  nums: number[];
  k: number;
}

export const topKFrequentProblem: LeetCodeProblem<
  TopKInput,
  TopKData,
  Record<string, never>
> = {
  id: "top-k-frequent-elements",
  number: 347,
  title: "Top K Frequent Elements",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/top-k-frequent-elements/",
  summary: "The k most frequent values via bucket sort by count.",
  prompt:
    "Given an integer array `nums` and an integer `k`, return the k most " +
    "frequent elements. Aim for better than O(n log n) time.",
  topics: ["Array", "Hash Table", "Bucket Sort", "Counting", "Heap (Priority Queue)"],
  tags: ["Array", "Hash Table", "Bucket Sort", "Counting", "Heap (Priority Queue)"],
  companies: ["Bloomberg"],
  frequency: 52.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 1, 1, 2, 2, 3], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => topKSteps(input.nums, input.k),
  Renderer: TopKRenderer,
};
