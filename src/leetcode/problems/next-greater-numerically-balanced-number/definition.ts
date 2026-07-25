import type { LeetCodeProblem } from "../../types";
import type { BalancedData } from "./algorithm";
import { balancedSteps } from "./algorithm";
import { CODE } from "./code";
import { BalancedRenderer } from "./BalancedRenderer";

export const nextBalancedNumberProblem: LeetCodeProblem<number, BalancedData, Record<string, never>> = {
  id: "next-greater-numerically-balanced-number",
  number: 2048,
  title: "Next Greater Numerically Balanced Number",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/next-greater-numerically-balanced-number/",
  summary: "Scan upward from n+1 for the first number where every digit d appears exactly d times.",
  prompt:
    "A number is numerically balanced if each digit d in it occurs exactly d times. Given n, " +
    "return the smallest numerically balanced number strictly greater than n.",
  topics: ["Math", "Backtracking", "Enumeration"],
  tags: ["Math", "Enumeration"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(gap · d)", timeWorst: "O(gap · d)", space: "O(d)" },
  inputSchema: [],
  makeDefaultInput: () => 1000,
  defaultOptions: {},
  buildSteps: (input) => balancedSteps(input),
  Renderer: BalancedRenderer,
};
