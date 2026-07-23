import type { LeetCodeProblem } from "../../types";
import type { ContainsDupIIData, ContainsDupIIInput } from "./algorithm";
import { containsDupIISteps } from "./algorithm";
import { CODE } from "./code";
import { ContainsDupIIRenderer } from "./ContainsDupIIRenderer";

export const containsDuplicateIIProblem: LeetCodeProblem<
  ContainsDupIIInput,
  ContainsDupIIData,
  Record<string, never>
> = {
  id: "contains-duplicate-ii",
  number: 219,
  title: "Contains Duplicate II",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/contains-duplicate-ii/",
  summary: "Equal values within k indices, via a last-seen map.",
  prompt:
    "Given an integer array `nums` and an integer `k`, return true if there are " +
    "two distinct indices i and j where nums[i] === nums[j] and |i − j| ≤ k.",
  topics: ["Array", "Hash Table", "Sliding Window"],
  tags: ["Array", "Hash Table", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 53.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 3, 1, 2, 3], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => containsDupIISteps(input),
  Renderer: ContainsDupIIRenderer,
};
