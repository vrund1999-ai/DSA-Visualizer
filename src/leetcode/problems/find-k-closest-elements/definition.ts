import type { LeetCodeProblem } from "../../types";
import type { KClosestData } from "./algorithm";
import { kClosestSteps } from "./algorithm";
import { CODE } from "./code";
import { KClosestRenderer } from "./KClosestRenderer";

interface KClosestInput {
  arr: number[];
  k: number;
  x: number;
}

export const findKClosestElementsProblem: LeetCodeProblem<KClosestInput, KClosestData, Record<string, never>> = {
  id: "find-k-closest-elements",
  number: 658,
  title: "Find K Closest Elements",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-k-closest-elements/",
  summary: "Shrink a window from whichever end is farther from x until k elements remain.",
  prompt:
    "Given a sorted array arr, an integer k, and a value x, return the k closest integers to " +
    "x (ascending). Closeness ties break toward the smaller value.",
  topics: ["Array", "Two Pointers", "Binary Search", "Sliding Window"],
  tags: ["Array", "Two Pointers", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k: 4, x: 5 }),
  defaultOptions: {},
  buildSteps: (input) => kClosestSteps(input.arr, input.k, input.x),
  Renderer: KClosestRenderer,
};
