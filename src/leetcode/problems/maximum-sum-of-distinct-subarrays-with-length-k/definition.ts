import type { LeetCodeProblem } from "../../types";
import type { MaxDistinctData } from "./algorithm";
import { maxDistinctSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxDistinctRenderer } from "./MaxDistinctRenderer";

interface MaxDistinctInput {
  nums: number[];
  k: number;
}

export const maxSumDistinctKProblem: LeetCodeProblem<MaxDistinctInput, MaxDistinctData, Record<string, never>> = {
  id: "maximum-sum-of-distinct-subarrays-with-length-k",
  number: 2461,
  title: "Maximum Sum of Distinct Subarrays With Length K",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/",
  summary: "Fixed-size sliding window; take the sum only when all k values are distinct.",
  prompt:
    "Return the maximum sum of any subarray of length exactly k in which all elements are " +
    "distinct. If no such subarray exists, return 0.",
  topics: ["Array", "Hash Table", "Sliding Window"],
  tags: ["Array", "Hash Table", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 5, 4, 2, 9, 9, 9], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => maxDistinctSteps(input.nums, input.k),
  Renderer: MaxDistinctRenderer,
};
