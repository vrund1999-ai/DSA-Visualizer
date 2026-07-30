import type { LeetCodeProblem } from "../../types";
import type { OnesZeroesData } from "./algorithm";
import { onesZeroesSteps } from "./algorithm";
import { CODE } from "./code";
import { OnesZeroesRenderer } from "./OnesZeroesRenderer";

interface OnesZeroesInput {
  strs: string[];
  m: number;
  n: number;
}

export const onesAndZeroesProblem: LeetCodeProblem<OnesZeroesInput, OnesZeroesData, Record<string, never>> = {
  id: "ones-and-zeroes",
  number: 474,
  title: "Ones and Zeroes",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/ones-and-zeroes/",
  summary: "A two-dimensional 0/1 knapsack: each string costs (zeros, ones) against the m-zero, n-one budget.",
  prompt:
    "Given binary strings and integers m and n, return the size of the largest subset such that the " +
    "subset uses at most m zeros and n ones total.",
  topics: ["Array", "String", "Dynamic Programming"],
  tags: ["Dynamic Programming", "Knapsack"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(L·m·n)", timeWorst: "O(L·m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ strs: ["10", "0001", "111001", "1", "0"], m: 5, n: 3 }),
  defaultOptions: {},
  buildSteps: (input) => onesZeroesSteps(input.strs, input.m, input.n),
  Renderer: OnesZeroesRenderer,
};
