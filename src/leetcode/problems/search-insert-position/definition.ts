import type { LeetCodeProblem } from "../../types";
import type { SearchInsertData, SearchInsertInput } from "./algorithm";
import { searchInsertSteps } from "./algorithm";
import { CODE } from "./code";
import { SearchInsertRenderer } from "./SearchInsertRenderer";

export const searchInsertProblem: LeetCodeProblem<
  SearchInsertInput,
  SearchInsertData,
  Record<string, never>
> = {
  id: "search-insert-position",
  number: 35,
  title: "Search Insert Position",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/search-insert-position/",
  summary: "Where a target belongs in a sorted array (lower bound).",
  prompt:
    "Given a sorted array of distinct integers and a `target`, return the index " +
    "if it is found. If not, return the index where it would be inserted to keep " +
    "the array sorted. Must run in O(log n).",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 57.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 3, 5, 6], target: 5 }),
  defaultOptions: {},
  buildSteps: (input) => searchInsertSteps(input),
  Renderer: SearchInsertRenderer,
};
