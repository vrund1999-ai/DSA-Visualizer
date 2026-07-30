import type { LeetCodeProblem } from "../../types";
import type { ThreePartsData } from "./algorithm";
import { threePartsSteps } from "./algorithm";
import { CODE } from "./code";
import { ThreePartsRenderer } from "./ThreePartsRenderer";

export const partitionThreePartsProblem: LeetCodeProblem<number[], ThreePartsData, Record<string, never>> = {
  id: "partition-array-into-three-parts-with-equal-sum",
  number: 1013,
  title: "Partition Array Into Three Parts With Equal Sum",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/",
  summary: "Sweep a running sum, cutting a boundary each time it reaches total/3; three parts with leftovers wins.",
  prompt:
    "Given an array of integers, return true if it can be partitioned into three contiguous parts with " +
    "equal sums.",
  topics: ["Array", "Greedy", "Prefix Sum"],
  tags: ["Array", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1],
  defaultOptions: {},
  buildSteps: (input) => threePartsSteps(input),
  Renderer: ThreePartsRenderer,
};
