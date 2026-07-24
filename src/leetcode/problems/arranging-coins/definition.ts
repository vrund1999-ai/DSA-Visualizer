import type { LeetCodeProblem } from "../../types";
import type { ArrangeCoinsData } from "./algorithm";
import { arrangeCoinsSteps } from "./algorithm";
import { CODE } from "./code";
import { ArrangeCoinsRenderer } from "./ArrangeCoinsRenderer";

export const arrangingCoinsProblem: LeetCodeProblem<number, ArrangeCoinsData, Record<string, never>> = {
  id: "arranging-coins",
  number: 441,
  title: "Arranging Coins",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/arranging-coins/",
  summary: "Binary search the largest k with triangular number k(k+1)/2 ≤ n.",
  prompt:
    "You have n coins to build a staircase where the i-th row has exactly i coins. " +
    "Return the number of complete rows you can build.",
  topics: ["Math", "Binary Search"],
  tags: ["Math", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 8,
  defaultOptions: {},
  buildSteps: (input) => arrangeCoinsSteps(input),
  Renderer: ArrangeCoinsRenderer,
};
