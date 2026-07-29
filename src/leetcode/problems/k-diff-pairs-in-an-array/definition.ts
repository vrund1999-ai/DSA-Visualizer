import type { LeetCodeProblem } from "../../types";
import type { KDiffData } from "./algorithm";
import { kDiffSteps } from "./algorithm";
import { CODE } from "./code";
import { KDiffRenderer } from "./KDiffRenderer";

interface KDiffInput {
  nums: number[];
  k: number;
}

export const kDiffPairsProblem: LeetCodeProblem<KDiffInput, KDiffData, Record<string, never>> = {
  id: "k-diff-pairs-in-an-array",
  number: 532,
  title: "K-diff Pairs in an Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/k-diff-pairs-in-an-array/",
  summary: "Count each distinct value whose partner v+k exists (k>0), or that repeats (k=0), via a frequency map.",
  prompt:
    "Return the number of unique k-diff pairs — pairs of values (a, b) with a < b and b − a = k — in " +
    "the array.",
  topics: ["Array", "Hash Table", "Two Pointers", "Binary Search", "Sorting"],
  tags: ["Array", "Hash Table", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [3, 1, 4, 1, 5], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => kDiffSteps(input.nums, input.k),
  Renderer: KDiffRenderer,
};
