import type { LeetCodeProblem } from "../../types";
import type { SearchRangeData, SearchRangeInput } from "./algorithm";
import { searchRangeSteps } from "./algorithm";
import { CODE } from "./code";
import { SearchRangeRenderer } from "./SearchRangeRenderer";

export const searchRangeProblem: LeetCodeProblem<
  SearchRangeInput,
  SearchRangeData,
  Record<string, never>
> = {
  id: "find-first-and-last-position-of-element-in-sorted-array",
  number: 34,
  title: "Find First and Last Position of Element in Sorted Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
  summary: "Boundary binary searches for a target's start and end.",
  prompt:
    "Given a sorted array `nums` and a `target`, return the first and last index " +
    "of target, or [-1, -1] if absent. Must run in O(log n).",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 62.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [5, 7, 7, 8, 8, 8, 10], target: 8 }),
  defaultOptions: {},
  buildSteps: (input) => searchRangeSteps(input),
  Renderer: SearchRangeRenderer,
};
