import type { LeetCodeProblem } from "../../types";
import type { UnsortedData } from "./algorithm";
import { unsortedSteps } from "./algorithm";
import { CODE } from "./code";
import { UnsortedRenderer } from "./UnsortedRenderer";

export const shortestUnsortedSubarrayProblem: LeetCodeProblem<number[], UnsortedData, Record<string, never>> = {
  id: "shortest-unsorted-continuous-subarray",
  number: 581,
  title: "Shortest Unsorted Continuous Subarray",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",
  summary: "Two scans find the window boundaries: the last element below the running max and the first above the running min.",
  prompt:
    "Find the shortest contiguous subarray that, if sorted in place, makes the whole array sorted in " +
    "ascending order. Return its length.",
  topics: ["Array", "Two Pointers", "Sorting", "Stack"],
  tags: ["Array", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 6, 4, 8, 10, 9, 15],
  defaultOptions: {},
  buildSteps: (input) => unsortedSteps(input),
  Renderer: UnsortedRenderer,
};
