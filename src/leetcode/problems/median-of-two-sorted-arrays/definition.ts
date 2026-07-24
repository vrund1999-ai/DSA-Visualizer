import type { LeetCodeProblem } from "../../types";
import type { MedianData, MedianInput } from "./algorithm";
import { medianSteps } from "./algorithm";
import { CODE } from "./code";
import { MedianRenderer } from "./MedianRenderer";

export const medianTwoSortedProblem: LeetCodeProblem<
  MedianInput,
  MedianData,
  Record<string, never>
> = {
  id: "median-of-two-sorted-arrays",
  number: 4,
  title: "Median of Two Sorted Arrays",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
  summary: "Median in O(log(m+n)) by binary-searching the partition.",
  prompt:
    "Given two sorted arrays `a` and `b`, return the median of the combined " +
    "sorted array in O(log(m+n)) time.",
  topics: ["Array", "Binary Search", "Divide and Conquer"],
  tags: ["Array", "Binary Search", "Divide and Conquer"],
  companies: ["Bloomberg"],
  frequency: 77.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log(m+n))", timeWorst: "O(log(m+n))", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ a: [1, 3, 8, 9, 15], b: [7, 11, 18, 19, 21, 25] }),
  defaultOptions: {},
  buildSteps: (input) => medianSteps(input),
  Renderer: MedianRenderer,
};
