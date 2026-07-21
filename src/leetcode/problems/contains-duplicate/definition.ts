import type { LeetCodeProblem } from "../../types";
import type { ContainsDupData } from "./algorithm";
import { containsDupSteps } from "./algorithm";
import { CODE } from "./code";
import { ContainsDupRenderer } from "./ContainsDupRenderer";

export const containsDuplicateProblem: LeetCodeProblem<
  number[],
  ContainsDupData,
  Record<string, never>
> = {
  id: "contains-duplicate",
  number: 217,
  title: "Contains Duplicate",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/contains-duplicate/",
  summary: "Detect any repeated value with a hash set.",
  prompt:
    "Given an integer array `nums`, return true if any value appears at least " +
    "twice, and false if every element is distinct.",
  topics: ["Array", "Hash Table", "Sorting"],
  tags: ["Array", "Hash Table", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 62,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 1],
  defaultOptions: {},
  buildSteps: (input) => containsDupSteps(input),
  Renderer: ContainsDupRenderer,
};
