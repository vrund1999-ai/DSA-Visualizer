import type { LeetCodeProblem } from "../../types";
import type { KthMissingData } from "./algorithm";
import { kthMissingSteps } from "./algorithm";
import { CODE } from "./code";
import { KthMissingRenderer } from "./KthMissingRenderer";

interface KthMissingInput {
  arr: number[];
  k: number;
}

export const kthMissingPositiveProblem: LeetCodeProblem<KthMissingInput, KthMissingData, Record<string, never>> = {
  id: "kth-missing-positive-number",
  number: 1539,
  title: "Kth Missing Positive Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/kth-missing-positive-number/",
  summary: "Binary search on the missing-count function arr[i] − (i + 1).",
  prompt:
    "Given a strictly increasing array of positive integers arr and an integer k, return " +
    "the kth positive integer missing from arr.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr: [2, 3, 4, 7, 11], k: 5 }),
  defaultOptions: {},
  buildSteps: (input) => kthMissingSteps(input.arr, input.k),
  Renderer: KthMissingRenderer,
};
