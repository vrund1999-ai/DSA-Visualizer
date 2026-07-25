import type { LeetCodeProblem } from "../../types";
import type { PivotArrayData } from "./algorithm";
import { pivotArraySteps } from "./algorithm";
import { CODE } from "./code";
import { PivotArrayRenderer } from "./PivotArrayRenderer";

interface PivotArrayInput {
  nums: number[];
  pivot: number;
}

export const partitionArrayPivotProblem: LeetCodeProblem<PivotArrayInput, PivotArrayData, Record<string, never>> = {
  id: "partition-array-according-to-given-pivot",
  number: 2161,
  title: "Partition Array According to Given Pivot",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/partition-array-according-to-given-pivot/",
  summary: "One stable pass into less/equal/greater buckets, then concatenate.",
  prompt:
    "Rearrange nums so that every value less than pivot comes before values equal to " +
    "pivot, which come before values greater than pivot — keeping the relative order " +
    "within the less and greater groups.",
  topics: ["Array", "Two Pointers", "Simulation"],
  tags: ["Array", "Two Pointers", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [9, 12, 5, 10, 14, 3, 10], pivot: 10 }),
  defaultOptions: {},
  buildSteps: (input) => pivotArraySteps(input.nums, input.pivot),
  Renderer: PivotArrayRenderer,
};
