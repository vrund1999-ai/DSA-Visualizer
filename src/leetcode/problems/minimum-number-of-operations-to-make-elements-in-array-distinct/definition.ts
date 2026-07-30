import type { LeetCodeProblem } from "../../types";
import type { DistinctData } from "./algorithm";
import { distinctSteps } from "./algorithm";
import { CODE } from "./code";
import { DistinctRenderer } from "./DistinctRenderer";

interface DistinctInput {
  nums: number[];
}

export const makeElementsDistinctProblem: LeetCodeProblem<DistinctInput, DistinctData, Record<string, never>> = {
  id: "minimum-number-of-operations-to-make-elements-in-array-distinct",
  number: 3396,
  title: "Minimum Number of Operations to Make Elements in Array Distinct",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/",
  summary: "Each op deletes the first 3 elements; the rightmost repeat fixes the prefix to wipe → ⌈(i+1)/3⌉ ops.",
  prompt:
    "In one operation you remove the first 3 elements (or all remaining if fewer than 3). Return the minimum " +
    "operations so the array contains only distinct elements (an empty array counts as distinct).",
  topics: ["Array", "Hash Table"],
  tags: ["Hash Table", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 3, 4, 2, 3, 3, 5, 7] }),
  defaultOptions: {},
  buildSteps: (input) => distinctSteps(input.nums),
  Renderer: DistinctRenderer,
};
