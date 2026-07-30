import type { LeetCodeProblem } from "../../types";
import type { CountMaxData } from "./algorithm";
import { countMaxSteps } from "./algorithm";
import { CODE } from "./code";
import { CountMaxRenderer } from "./CountMaxRenderer";

interface CountMaxInput {
  nums: number[];
  k: number;
}

export const countSubarraysMaxKProblem: LeetCodeProblem<CountMaxInput, CountMaxData, Record<string, never>> = {
  id: "count-subarrays-where-max-element-appears-at-least-k-times",
  number: 2962,
  title: "Count Subarrays Where Max Element Appears at Least K Times",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/",
  summary: "Sliding window: after k maxes fill the window, every start before `left` yields a valid subarray.",
  prompt:
    "Return the number of subarrays where the maximum element of the whole array appears at least k times.",
  topics: ["Array", "Sliding Window"],
  tags: ["Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 3, 2, 3, 3], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => countMaxSteps(input.nums, input.k),
  Renderer: CountMaxRenderer,
};
