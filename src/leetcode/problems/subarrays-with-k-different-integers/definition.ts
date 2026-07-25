import type { LeetCodeProblem } from "../../types";
import type { KDistinctData } from "./algorithm";
import { kDistinctSteps } from "./algorithm";
import { CODE } from "./code";
import { KDistinctRenderer } from "./KDistinctRenderer";

interface KDistinctInput {
  nums: number[];
  k: number;
}

export const subarraysKDistinctProblem: LeetCodeProblem<KDistinctInput, KDistinctData, Record<string, never>> = {
  id: "subarrays-with-k-different-integers",
  number: 992,
  title: "Subarrays with K Different Integers",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
  summary: "Exactly-k distinct = atMost(k) − atMost(k−1) via a shrinking sliding window.",
  prompt:
    "Return the number of subarrays of nums that contain exactly k different integers.",
  topics: ["Array", "Hash Table", "Counting", "Sliding Window"],
  tags: ["Array", "Hash Table", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 1, 2, 3], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => kDistinctSteps(input.nums, input.k),
  Renderer: KDistinctRenderer,
};
