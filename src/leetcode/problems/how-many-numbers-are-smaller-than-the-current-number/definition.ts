import type { LeetCodeProblem } from "../../types";
import type { SmallerData } from "./algorithm";
import { smallerSteps } from "./algorithm";
import { CODE } from "./code";
import { SmallerRenderer } from "./SmallerRenderer";

export const smallerThanCurrentProblem: LeetCodeProblem<number[], SmallerData, Record<string, never>> = {
  id: "how-many-numbers-are-smaller-than-the-current-number",
  number: 1365,
  title: "How Many Numbers Are Smaller Than the Current Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
  summary: "Counting sort with prefix sums answers each element in O(1).",
  prompt:
    "For each nums[i], count how many other numbers in the array are strictly smaller " +
    "than it, and return those counts in order.",
  topics: ["Array", "Hash Table", "Counting", "Sorting"],
  tags: ["Array", "Hash Table", "Counting"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + K)", timeWorst: "O(n + K)", space: "O(K)" },
  inputSchema: [],
  makeDefaultInput: () => [8, 1, 2, 2, 3],
  defaultOptions: {},
  buildSteps: (input) => smallerSteps(input),
  Renderer: SmallerRenderer,
};
