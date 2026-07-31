import type { LeetCodeProblem } from "../../types";
import type { ZeroArrayData } from "./algorithm";
import { zeroArraySteps } from "./algorithm";
import { CODE } from "./code";
import { ZeroArrayRenderer } from "./ZeroArrayRenderer";

interface ZeroArrayInput {
  nums: number[];
  queries: number[][];
}

export const zeroArrayIIProblem: LeetCodeProblem<ZeroArrayInput, ZeroArrayData, Record<string, never>> = {
  id: "zero-array-transformation-ii",
  number: 3356,
  title: "Zero Array Transformation II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/zero-array-transformation-ii/",
  summary: "Binary-search the query count; a difference array sums the max decrement available at each index and checks it covers nums.",
  prompt:
    "Each query [l, r, v] may decrement every element in nums[l..r] by up to v. Return the minimum number of " +
    "queries (a prefix of the list) after which nums can be made all zero, or -1.",
  topics: ["Array", "Two Pointers", "Binary Search", "Prefix Sum"],
  tags: ["Binary Search", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((n+q) log q)", timeWorst: "O((n+q) log q)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [2, 0, 2], queries: [[0, 2, 1], [0, 2, 1], [1, 1, 3]] }),
  defaultOptions: {},
  buildSteps: (input) => zeroArraySteps(input.nums, input.queries),
  Renderer: ZeroArrayRenderer,
};
