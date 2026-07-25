import type { LeetCodeProblem } from "../../types";
import type { DoubleExistData } from "./algorithm";
import { doubleExistSteps } from "./algorithm";
import { CODE } from "./code";
import { DoubleExistRenderer } from "./DoubleExistRenderer";

export const checkIfNAndDoubleExistProblem: LeetCodeProblem<number[], DoubleExistData, Record<string, never>> = {
  id: "check-if-n-and-its-double-exist",
  number: 1346,
  title: "Check If N and Its Double Exist",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/check-if-n-and-its-double-exist/",
  summary: "Scan once with a seen-set, checking each value for its double or half.",
  prompt:
    "Given an array arr, return true if there exist two distinct indices i and j with arr[i] = " +
    "2 · arr[j].",
  topics: ["Array", "Hash Table", "Two Pointers", "Binary Search", "Sorting"],
  tags: ["Array", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [10, 2, 5, 3],
  defaultOptions: {},
  buildSteps: (input) => doubleExistSteps(input),
  Renderer: DoubleExistRenderer,
};
