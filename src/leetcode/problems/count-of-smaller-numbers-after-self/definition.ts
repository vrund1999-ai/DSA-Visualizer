import type { LeetCodeProblem } from "../../types";
import type { CountSmallerData } from "./algorithm";
import { countSmallerSteps } from "./algorithm";
import { CODE } from "./code";
import { CountSmallerRenderer } from "./CountSmallerRenderer";

export const countSmallerAfterSelfProblem: LeetCodeProblem<number[], CountSmallerData, Record<string, never>> = {
  id: "count-of-smaller-numbers-after-self",
  number: 315,
  title: "Count of Smaller Numbers After Self",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
  summary: "Count strictly smaller elements to each index's right (merge sort / BIT for scale).",
  prompt:
    "Given an integer array nums, return counts where counts[i] is the number of elements " +
    "to the right of nums[i] that are strictly smaller than it.",
  topics: ["Array", "Binary Indexed Tree", "Divide and Conquer", "Merge Sort"],
  tags: ["Array", "Binary Indexed Tree", "Merge Sort"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [5, 2, 6, 1],
  defaultOptions: {},
  buildSteps: (input) => countSmallerSteps(input),
  Renderer: CountSmallerRenderer,
};
