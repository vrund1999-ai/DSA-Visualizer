import type { LeetCodeProblem } from "../../types";
import type { ConsecutiveData } from "./algorithm";
import { consecutiveSteps } from "./algorithm";
import { CODE } from "./code";
import { ConsecutiveRenderer } from "./ConsecutiveRenderer";

export const longestConsecutiveProblem: LeetCodeProblem<
  number[],
  ConsecutiveData,
  Record<string, never>
> = {
  id: "longest-consecutive-sequence",
  number: 128,
  title: "Longest Consecutive Sequence",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/longest-consecutive-sequence/",
  summary: "Longest run of consecutive integers, in O(n) with a hash set.",
  prompt:
    "Given an unsorted array `nums`, return the length of the longest sequence " +
    "of consecutive integers. The algorithm must run in O(n) time.",
  topics: ["Array", "Hash Table", "Union-Find"],
  tags: ["Array", "Hash Table", "Union-Find"],
  companies: ["Bloomberg"],
  frequency: 71.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [100, 4, 200, 1, 3, 2],
  defaultOptions: {},
  buildSteps: (input) => consecutiveSteps(input),
  Renderer: ConsecutiveRenderer,
};
