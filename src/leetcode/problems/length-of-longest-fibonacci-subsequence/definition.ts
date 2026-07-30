import type { LeetCodeProblem } from "../../types";
import type { FibSubseqData } from "./algorithm";
import { fibSubseqSteps } from "./algorithm";
import { CODE } from "./code";
import { FibSubseqRenderer } from "./FibSubseqRenderer";

interface FibSubseqInput {
  arr: number[];
}

export const longestFibSubseqProblem: LeetCodeProblem<FibSubseqInput, FibSubseqData, Record<string, never>> = {
  id: "length-of-longest-fibonacci-subsequence",
  number: 873,
  title: "Length of Longest Fibonacci Subsequence",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/",
  summary: "Pair DP: dp[j][i] extends dp[k][j] whenever arr[i]−arr[j] equals an earlier value arr[k].",
  prompt:
    "Given a strictly increasing array, return the length of the longest Fibonacci-like subsequence (each " +
    "term is the sum of the previous two), or 0 if none of length ≥ 3 exists.",
  topics: ["Array", "Hash Table", "Dynamic Programming"],
  tags: ["Dynamic Programming", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr: [1, 2, 3, 4, 5, 6, 7, 8] }),
  defaultOptions: {},
  buildSteps: (input) => fibSubseqSteps(input.arr),
  Renderer: FibSubseqRenderer,
};
