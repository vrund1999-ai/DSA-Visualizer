import type { LeetCodeProblem } from "../../types";
import type { PowerValueData } from "./algorithm";
import { powerValueSteps } from "./algorithm";
import { CODE } from "./code";
import { PowerValueRenderer } from "./PowerValueRenderer";

interface PowerValueInput {
  lo: number;
  hi: number;
  k: number;
}

export const sortByPowerValueProblem: LeetCodeProblem<PowerValueInput, PowerValueData, Record<string, never>> = {
  id: "sort-integers-by-the-power-value",
  number: 1387,
  title: "Sort Integers by The Power Value",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/sort-integers-by-the-power-value/",
  summary: "Rank a range by Collatz step-count (power), tie-broken by value.",
  prompt:
    "The power of x is the number of Collatz steps (x → x/2 if even, 3x+1 if odd) to " +
    "reach 1. Sort the integers in [lo, hi] by ascending power (ties broken by value) " +
    "and return the kth element.",
  topics: ["Dynamic Programming", "Memoization", "Sorting"],
  tags: ["Dynamic Programming", "Memoization", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 62.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n · L)", timeWorst: "O(n log n · L)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ lo: 12, hi: 15, k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => powerValueSteps(input.lo, input.hi, input.k),
  Renderer: PowerValueRenderer,
};
