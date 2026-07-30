import type { LeetCodeProblem } from "../../types";
import type { LargestGroupData } from "./algorithm";
import { largestGroupSteps } from "./algorithm";
import { CODE } from "./code";
import { LargestGroupRenderer } from "./LargestGroupRenderer";

interface LargestGroupInput {
  n: number;
}

export const countLargestGroupProblem: LeetCodeProblem<LargestGroupInput, LargestGroupData, Record<string, never>> = {
  id: "count-largest-group",
  number: 1399,
  title: "Count Largest Group",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/count-largest-group/",
  summary: "Bucket 1..n by digit sum, then count how many buckets tie for the largest size.",
  prompt:
    "Group the numbers from 1 to n by their digit sum. Return the number of groups that have the largest " +
    "size.",
  topics: ["Hash Table", "Math", "Counting"],
  tags: ["Counting", "Math"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 13 }),
  defaultOptions: {},
  buildSteps: (input) => largestGroupSteps(input.n),
  Renderer: LargestGroupRenderer,
};
