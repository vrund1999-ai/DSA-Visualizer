import type { LeetCodeProblem } from "../../types";
import type { MajorityData } from "./algorithm";
import { majoritySteps } from "./algorithm";
import { CODE } from "./code";
import { MajorityRenderer } from "./MajorityRenderer";

export const majorityElementProblem: LeetCodeProblem<
  number[],
  MajorityData,
  Record<string, never>
> = {
  id: "majority-element",
  number: 169,
  title: "Majority Element",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/majority-element/",
  summary: "Find the value appearing more than n/2 times (Boyer-Moore).",
  prompt:
    "Given an array `nums` of size n, return the majority element — the element " +
    "that appears more than ⌊n/2⌋ times. You may assume it always exists.",
  topics: ["Array", "Hash Table", "Divide and Conquer", "Counting"],
  tags: ["Array", "Hash Table", "Divide and Conquer", "Counting"],
  companies: ["Bloomberg"],
  frequency: 76.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 2, 1, 1, 1, 2, 2],
  defaultOptions: {},
  buildSteps: (input) => majoritySteps(input),
  Renderer: MajorityRenderer,
};
