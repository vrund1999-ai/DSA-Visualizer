import type { LeetCodeProblem } from "../../types";
import type { MajorityIIData } from "./algorithm";
import { majorityIISteps } from "./algorithm";
import { CODE } from "./code";
import { MajorityIIRenderer } from "./MajorityIIRenderer";

export const majorityElementIIProblem: LeetCodeProblem<
  number[],
  MajorityIIData,
  Record<string, never>
> = {
  id: "majority-element-ii",
  number: 229,
  title: "Majority Element II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/majority-element-ii/",
  summary: "Values appearing more than n/3 times (extended Boyer-Moore).",
  prompt:
    "Given an integer array `nums`, return all elements that appear more than " +
    "⌊n/3⌋ times. There can be at most two such elements.",
  topics: ["Array", "Hash Table", "Sorting", "Counting"],
  tags: ["Array", "Hash Table", "Sorting", "Counting"],
  companies: ["Bloomberg"],
  frequency: 45.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 1, 1, 3, 3, 2, 2, 2],
  defaultOptions: {},
  buildSteps: (input) => majorityIISteps(input),
  Renderer: MajorityIIRenderer,
};
