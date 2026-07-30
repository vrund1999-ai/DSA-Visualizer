import type { LeetCodeProblem } from "../../types";
import type { MaxNumberData } from "./algorithm";
import { maxNumberSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxNumberRenderer } from "./MaxNumberRenderer";

interface MaxNumberInput {
  nums1: number[];
  nums2: number[];
  k: number;
}

export const createMaximumNumberProblem: LeetCodeProblem<MaxNumberInput, MaxNumberData, Record<string, never>> = {
  id: "create-maximum-number",
  number: 321,
  title: "Create Maximum Number",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/create-maximum-number/",
  summary: "For every split, take each array's max subsequence (monotonic stack) and merge them lexicographically; keep the best.",
  prompt:
    "Given two digit arrays and an integer k, create the maximum number of length k using digits from both " +
    "arrays while preserving the relative order within each array.",
  topics: ["Array", "Two Pointers", "Stack", "Greedy", "Monotonic Stack"],
  tags: ["Greedy", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(k·(m+n)²)", timeWorst: "O(k·(m+n)²)", space: "O(m+n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums1: [3, 4, 6, 5], nums2: [9, 1, 2, 5, 8, 3], k: 5 }),
  defaultOptions: {},
  buildSteps: (input) => maxNumberSteps(input.nums1, input.nums2, input.k),
  Renderer: MaxNumberRenderer,
};
