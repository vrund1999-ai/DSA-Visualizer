import type { LeetCodeProblem } from "../../types";
import type { DivideCostData } from "./algorithm";
import { divideCostSteps } from "./algorithm";
import { CODE } from "./code";
import { DivideCostRenderer } from "./DivideCostRenderer";

interface DivideCostInput {
  nums: number[];
}

export const divideArrayMinCostProblem: LeetCodeProblem<DivideCostInput, DivideCostData, Record<string, never>> = {
  id: "divide-an-array-into-subarrays-with-minimum-cost-i",
  number: 3010,
  title: "Divide an Array Into Subarrays With Minimum Cost I",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/",
  summary: "Cost is the sum of each subarray's first element; with subarray 1 fixed, pick the two smallest of the rest.",
  prompt:
    "Split nums into exactly 3 disjoint contiguous subarrays. The cost of a subarray is its first element. " +
    "Return the minimum total cost over all such divisions.",
  topics: ["Array", "Sorting", "Enumeration"],
  tags: ["Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 3, 2, 12, 8] }),
  defaultOptions: {},
  buildSteps: (input) => divideCostSteps(input.nums),
  Renderer: DivideCostRenderer,
};
