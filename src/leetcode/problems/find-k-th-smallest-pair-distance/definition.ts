import type { LeetCodeProblem } from "../../types";
import type { PairDistData } from "./algorithm";
import { pairDistSteps } from "./algorithm";
import { CODE } from "./code";
import { PairDistRenderer } from "./PairDistRenderer";

interface PairDistInput {
  nums: number[];
  k: number;
}

export const findKthSmallestPairDistanceProblem: LeetCodeProblem<PairDistInput, PairDistData, Record<string, never>> = {
  id: "find-k-th-smallest-pair-distance",
  number: 719,
  title: "Find K-th Smallest Pair Distance",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/find-k-th-smallest-pair-distance/",
  summary: "Binary-search the distance; a two-pointer sweep counts pairs within it in O(n).",
  prompt:
    "The distance of a pair is the absolute difference of its values. Given nums and k, return the " +
    "k-th smallest distance among all pairs.",
  topics: ["Array", "Two Pointers", "Binary Search", "Sorting"],
  tags: ["Array", "Two Pointers", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n + n log(max))", timeWorst: "O(n log(max))", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 6, 1, 3, 8], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => pairDistSteps(input.nums, input.k),
  Renderer: PairDistRenderer,
};
