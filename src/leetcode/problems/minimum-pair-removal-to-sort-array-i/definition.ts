import type { LeetCodeProblem } from "../../types";
import type { PairRemovalData } from "./algorithm";
import { pairRemovalSteps } from "./algorithm";
import { CODE } from "./code";
import { PairRemovalRenderer } from "./PairRemovalRenderer";

export const minPairRemovalProblem: LeetCodeProblem<number[], PairRemovalData, Record<string, never>> = {
  id: "minimum-pair-removal-to-sort-array-i",
  number: 3507,
  title: "Minimum Pair Removal to Sort Array I",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/",
  summary: "Repeatedly merge the smallest-sum adjacent pair (leftmost on ties) until the array is non-decreasing.",
  prompt:
    "In one operation, replace an adjacent pair with its sum. Return the minimum number of operations to " +
    "make the array non-decreasing, always merging the pair with the smallest sum.",
  topics: ["Array", "Linked List", "Simulation"],
  tags: ["Array", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 2, 3, 1],
  defaultOptions: {},
  buildSteps: (input) => pairRemovalSteps(input),
  Renderer: PairRemovalRenderer,
};
