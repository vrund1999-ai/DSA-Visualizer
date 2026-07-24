import type { LeetCodeProblem } from "../../types";
import type { BouquetsData } from "./algorithm";
import { bouquetsSteps } from "./algorithm";
import { CODE } from "./code";
import { BouquetsRenderer } from "./BouquetsRenderer";

interface BouquetsInput {
  bloomDay: number[];
  m: number;
  k: number;
}

export const minDaysBouquetsProblem: LeetCodeProblem<BouquetsInput, BouquetsData, Record<string, never>> = {
  id: "minimum-number-of-days-to-make-m-bouquets",
  number: 1482,
  title: "Minimum Number of Days to Make m Bouquets",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
  summary: "Binary search the day; feasibility = m runs of k adjacent bloomed flowers.",
  prompt:
    "Each flower blooms on its bloomDay. A bouquet needs k adjacent bloomed flowers, and " +
    "you need m bouquets. Return the minimum number of days to wait, or -1 if impossible.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 42.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log(max))", timeWorst: "O(n log(max))", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ bloomDay: [7, 7, 7, 7, 12, 7, 7], m: 2, k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => bouquetsSteps(input.bloomDay, input.m, input.k),
  Renderer: BouquetsRenderer,
};
