import type { LeetCodeProblem } from "../../types";
import type { CouplesData } from "./algorithm";
import { couplesSteps } from "./algorithm";
import { CODE } from "./code";
import { CouplesRenderer } from "./CouplesRenderer";

export const couplesHoldingHandsProblem: LeetCodeProblem<number[], CouplesData, Record<string, never>> = {
  id: "couples-holding-hands",
  number: 765,
  title: "Couples Holding Hands",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/couples-holding-hands/",
  summary: "Person p's partner is p XOR 1; greedily swap each left seat-pair's partner into place.",
  prompt:
    "N couples sit in 2N seats. Couple k occupies people 2k and 2k+1. Return the minimum number of " +
    "swaps so that every couple sits in adjacent seats.",
  topics: ["Greedy", "Depth-First Search", "Union Find", "Graph"],
  tags: ["Greedy", "Union Find", "Graph"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 2, 4, 6, 7, 1, 3, 5],
  defaultOptions: {},
  buildSteps: (input) => couplesSteps(input),
  Renderer: CouplesRenderer,
};
