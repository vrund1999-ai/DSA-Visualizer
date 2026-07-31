import type { LeetCodeProblem } from "../../types";
import type { FindPairsData, FindPairsOp } from "./algorithm";
import { findPairsSteps } from "./algorithm";
import { CODE } from "./code";
import { FindPairsRenderer } from "./FindPairsRenderer";

interface FindPairsInput {
  nums1: number[];
  nums2: number[];
  ops: FindPairsOp[];
}

export const findingPairsProblem: LeetCodeProblem<FindPairsInput, FindPairsData, Record<string, never>> = {
  id: "finding-pairs-with-a-certain-sum",
  number: 1865,
  title: "Finding Pairs With a Certain Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/finding-pairs-with-a-certain-sum/",
  summary: "A frequency map of the mutable array turns count(tot) into a sum over nums1 of how many nums2 equal tot − x.",
  prompt:
    "Support add(index, val) which increments nums2[index], and count(tot) which returns the number of pairs " +
    "(i, j) with nums1[i] + nums2[j] == tot.",
  topics: ["Array", "Hash Table", "Design"],
  tags: ["Design", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(|nums1|) per count", timeWorst: "O(|nums1|)", space: "O(|nums2|)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    nums1: [1, 1, 2, 2, 2, 3],
    nums2: [1, 4, 5, 2, 5, 4],
    ops: [
      { type: "count", tot: 7 },
      { type: "add", index: 3, val: 2 },
      { type: "count", tot: 8 },
      { type: "count", tot: 4 },
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => findPairsSteps(input.nums1, input.nums2, input.ops),
  Renderer: FindPairsRenderer,
};
