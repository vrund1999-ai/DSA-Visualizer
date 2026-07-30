import type { LeetCodeProblem } from "../../types";
import type { SplitData } from "./algorithm";
import { splitSteps } from "./algorithm";
import { CODE } from "./code";
import { SplitRenderer } from "./SplitRenderer";

interface SplitInput {
  nums: number[];
}

export const waysToSplitArrayProblem: LeetCodeProblem<SplitInput, SplitData, Record<string, never>> = {
  id: "number-of-ways-to-split-array",
  number: 2270,
  title: "Number of Ways to Split Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-ways-to-split-array/",
  summary: "Count split points where the running left prefix sum is at least the remaining right suffix sum (total − left).",
  prompt:
    "Count the valid split indices i (0 ≤ i < n−1) where the sum of nums[0..i] is greater than or equal to " +
    "the sum of nums[i+1..n-1].",
  topics: ["Array", "Prefix Sum"],
  tags: ["Prefix Sum", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [10, 4, -8, 7] }),
  defaultOptions: {},
  buildSteps: (input) => splitSteps(input.nums),
  Renderer: SplitRenderer,
};
