import type { LeetCodeProblem } from "../../types";
import type { BeautifulArrData } from "./algorithm";
import { beautifulArrSteps } from "./algorithm";
import { CODE } from "./code";
import { BeautifulArrRenderer } from "./BeautifulArrRenderer";

interface BeautifulArrInput {
  n: number;
}

export const beautifulArrangementProblem: LeetCodeProblem<BeautifulArrInput, BeautifulArrData, Record<string, never>> = {
  id: "beautiful-arrangement",
  number: 526,
  title: "Beautiful Arrangement",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/beautiful-arrangement/",
  summary: "Backtracking places a divisible value at each position (v % pos == 0 or pos % v == 0), counting complete arrangements.",
  prompt:
    "Count the permutations of 1..n (a \"beautiful arrangement\") where, for every position i, either the " +
    "value is divisible by i or i is divisible by the value.",
  topics: ["Array", "Dynamic Programming", "Backtracking", "Bitmask"],
  tags: ["Backtracking", "Bitmask"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(k) (k = #arrangements)", timeWorst: "O(n!)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 4 }),
  defaultOptions: {},
  buildSteps: (input) => beautifulArrSteps(input.n),
  Renderer: BeautifulArrRenderer,
};
