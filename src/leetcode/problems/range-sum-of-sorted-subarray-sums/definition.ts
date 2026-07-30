import type { LeetCodeProblem } from "../../types";
import type { RangeSumData } from "./algorithm";
import { rangeSumSteps } from "./algorithm";
import { CODE } from "./code";
import { RangeSumRenderer } from "./RangeSumRenderer";

interface RangeSumInput {
  nums: number[];
  left: number;
  right: number;
}

export const rangeSumSortedSubarrayProblem: LeetCodeProblem<RangeSumInput, RangeSumData, Record<string, never>> = {
  id: "range-sum-of-sorted-subarray-sums",
  number: 1508,
  title: "Range Sum of Sorted Subarray Sums",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/",
  summary: "Enumerate every subarray sum, sort them, and add the ones ranked between left and right (1-indexed).",
  prompt:
    "Compute the sum of every contiguous subarray, sort these sums in non-decreasing order, and return the " +
    "sum of the values from index left to right (1-indexed), modulo 1e9+7.",
  topics: ["Array", "Two Pointers", "Binary Search", "Sorting"],
  tags: ["Sorting", "Array"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n² log n)", timeWorst: "O(n² log n)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 3, 4], left: 1, right: 5 }),
  defaultOptions: {},
  buildSteps: (input) => rangeSumSteps(input.nums, input.left, input.right),
  Renderer: RangeSumRenderer,
};
