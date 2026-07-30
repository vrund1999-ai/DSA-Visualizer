import type { LeetCodeProblem } from "../../types";
import type { SwapsData } from "./algorithm";
import { swapsSteps } from "./algorithm";
import { CODE } from "./code";
import { SwapsRenderer } from "./SwapsRenderer";

interface SwapsInput {
  s: string;
  pairs: number[][];
}

export const smallestStringWithSwapsProblem: LeetCodeProblem<SwapsInput, SwapsData, Record<string, never>> = {
  id: "smallest-string-with-swaps",
  number: 1202,
  title: "Smallest String With Swaps",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/smallest-string-with-swaps/",
  summary: "Union swappable index pairs; within each component, place its sorted characters at its sorted positions.",
  prompt:
    "Given a string s and pairs of indices you may swap any number of times, return the lexicographically " +
    "smallest string achievable.",
  topics: ["Hash Table", "String", "Union Find", "Sorting"],
  tags: ["Union Find", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "dcabxy", pairs: [[0, 3], [1, 2], [3, 5]] }),
  defaultOptions: {},
  buildSteps: (input) => swapsSteps(input.s, input.pairs),
  Renderer: SwapsRenderer,
};
