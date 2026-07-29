import type { LeetCodeProblem } from "../../types";
import type { NiceSubarrayData } from "./algorithm";
import { niceSubarraySteps } from "./algorithm";
import { CODE } from "./code";
import { NiceSubarrayRenderer } from "./NiceSubarrayRenderer";

export const longestNiceSubarrayProblem: LeetCodeProblem<number[], NiceSubarrayData, Record<string, never>> = {
  id: "longest-nice-subarray",
  number: 2401,
  title: "Longest Nice Subarray",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-nice-subarray/",
  summary: "Slide a window keeping a bitmask; disjoint bits mean the subarray's elements pairwise AND to 0.",
  prompt:
    "A subarray is nice if the bitwise AND of every pair of its elements is 0. Return the length of the " +
    "longest nice subarray of nums.",
  topics: ["Array", "Bit Manipulation", "Sliding Window"],
  tags: ["Array", "Bit Manipulation", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 8, 48, 10],
  defaultOptions: {},
  buildSteps: (input) => niceSubarraySteps(input),
  Renderer: NiceSubarrayRenderer,
};
