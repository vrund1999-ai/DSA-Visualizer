import type { LeetCodeProblem } from "../../types";
import type { PivotData } from "./algorithm";
import { pivotSteps } from "./algorithm";
import { CODE } from "./code";
import { PivotRenderer } from "./PivotRenderer";

export const findPivotIndexProblem: LeetCodeProblem<
  number[],
  PivotData,
  Record<string, never>
> = {
  id: "find-pivot-index",
  number: 724,
  title: "Find Pivot Index",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-pivot-index/",
  summary: "Index where left sum equals right sum (prefix sum).",
  prompt:
    "Given an array `nums`, return the leftmost index where the sum of the " +
    "numbers to its left equals the sum to its right (each empty side sums to 0). " +
    "Return -1 if there is no such index.",
  topics: ["Array", "Prefix Sum"],
  tags: ["Array", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 7, 3, 6, 5, 6],
  defaultOptions: {},
  buildSteps: (input) => pivotSteps(input),
  Renderer: PivotRenderer,
};
