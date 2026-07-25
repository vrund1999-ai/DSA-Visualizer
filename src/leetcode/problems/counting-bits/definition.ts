import type { LeetCodeProblem } from "../../types";
import type { CountBitsData } from "./algorithm";
import { countBitsSteps } from "./algorithm";
import { CODE } from "./code";
import { CountBitsRenderer } from "./CountBitsRenderer";

export const countingBitsProblem: LeetCodeProblem<number, CountBitsData, Record<string, never>> = {
  id: "counting-bits",
  number: 338,
  title: "Counting Bits",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/counting-bits/",
  summary: "dp[i] = dp[i>>1] + (i & 1): reuse the answer for i with its last bit removed.",
  prompt:
    "Given an integer n, return an array ans of length n+1 where ans[i] is the number of 1 bits in " +
    "the binary representation of i.",
  topics: ["Dynamic Programming", "Bit Manipulation"],
  tags: ["Dynamic Programming", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => 8,
  defaultOptions: {},
  buildSteps: (input) => countBitsSteps(input),
  Renderer: CountBitsRenderer,
};
