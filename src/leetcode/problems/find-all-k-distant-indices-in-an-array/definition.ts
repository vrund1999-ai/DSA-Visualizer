import type { LeetCodeProblem } from "../../types";
import type { KDistantData } from "./algorithm";
import { kDistantSteps } from "./algorithm";
import { CODE } from "./code";
import { KDistantRenderer } from "./KDistantRenderer";

interface KDistantInput {
  nums: number[];
  key: number;
  k: number;
}

export const kDistantIndicesProblem: LeetCodeProblem<KDistantInput, KDistantData, Record<string, never>> = {
  id: "find-all-k-distant-indices-in-an-array",
  number: 2200,
  title: "Find All K-Distant Indices in an Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/",
  summary: "Every occurrence of key marks the window ±k around it; the union of those windows is the answer.",
  prompt:
    "Return, in ascending order, all indices i such that there exists an index j with |i − j| ≤ k and " +
    "nums[j] == key.",
  topics: ["Array", "Two Pointers"],
  tags: ["Array", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·k)", timeWorst: "O(n·k)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [3, 4, 9, 1, 3, 9, 5], key: 9, k: 1 }),
  defaultOptions: {},
  buildSteps: (input) => kDistantSteps(input.nums, input.key, input.k),
  Renderer: KDistantRenderer,
};
