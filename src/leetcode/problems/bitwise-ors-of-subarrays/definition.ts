import type { LeetCodeProblem } from "../../types";
import type { BitwiseOrsData } from "./algorithm";
import { bitwiseOrsSteps } from "./algorithm";
import { CODE } from "./code";
import { BitwiseOrsRenderer } from "./BitwiseOrsRenderer";

export const bitwiseOrsOfSubarraysProblem: LeetCodeProblem<number[], BitwiseOrsData, Record<string, never>> = {
  id: "bitwise-ors-of-subarrays",
  number: 898,
  title: "Bitwise ORs of Subarrays",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/bitwise-ors-of-subarrays/",
  summary: "Maintain the small set of ORs ending at each index; union them for all distinct subarray ORs.",
  prompt:
    "Return the number of distinct values among the bitwise ORs of every (contiguous, non-empty) " +
    "subarray of arr.",
  topics: ["Array", "Dynamic Programming", "Bit Manipulation"],
  tags: ["Array", "Dynamic Programming", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(32n)", timeWorst: "O(32n)", space: "O(32n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 1, 2, 4],
  defaultOptions: {},
  buildSteps: (input) => bitwiseOrsSteps(input),
  Renderer: BitwiseOrsRenderer,
};
