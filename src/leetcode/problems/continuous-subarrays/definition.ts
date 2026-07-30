import type { LeetCodeProblem } from "../../types";
import type { ContinuousData } from "./algorithm";
import { continuousSteps } from "./algorithm";
import { CODE } from "./code";
import { ContinuousRenderer } from "./ContinuousRenderer";

export const continuousSubarraysProblem: LeetCodeProblem<number[], ContinuousData, Record<string, never>> = {
  id: "continuous-subarrays",
  number: 2762,
  title: "Continuous Subarrays",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/continuous-subarrays/",
  summary: "Sliding window with min/max deques; shrink when the range exceeds 2 and count valid subarrays.",
  prompt:
    "Count the subarrays where the difference between any two elements is at most 2 (equivalently, max − " +
    "min ≤ 2 over the subarray).",
  topics: ["Array", "Queue", "Sliding Window", "Heap", "Monotonic Queue"],
  tags: ["Sliding Window", "Monotonic Queue"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 4, 2, 4],
  defaultOptions: {},
  buildSteps: (input) => continuousSteps(input),
  Renderer: ContinuousRenderer,
};
