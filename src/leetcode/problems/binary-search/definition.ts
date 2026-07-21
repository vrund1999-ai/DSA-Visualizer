import type { LeetCodeProblem } from "../../types";
import type { BinarySearchData, BinarySearchInput } from "./algorithm";
import { binarySearchSteps } from "./algorithm";
import { CODE } from "./code";
import { BinarySearchRenderer } from "./BinarySearchRenderer";

export const binarySearchProblem: LeetCodeProblem<
  BinarySearchInput,
  BinarySearchData,
  Record<string, never>
> = {
  id: "binary-search",
  number: 704,
  title: "Binary Search",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/binary-search/",
  summary: "Find a target in a sorted array in O(log n).",
  prompt:
    "Given a sorted array of distinct integers `nums` and an integer `target`, " +
    "return the index of `target` if it exists, otherwise -1. Must run in " +
    "O(log n) time.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 54.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [-1, 0, 3, 5, 9, 12], target: 9 }),
  defaultOptions: {},
  buildSteps: (input) => binarySearchSteps(input),
  Renderer: BinarySearchRenderer,
};
