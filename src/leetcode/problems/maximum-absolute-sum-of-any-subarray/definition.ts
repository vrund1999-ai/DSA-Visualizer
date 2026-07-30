import type { LeetCodeProblem } from "../../types";
import type { AbsSumData } from "./algorithm";
import { absSumSteps } from "./algorithm";
import { CODE } from "./code";
import { AbsSumRenderer } from "./AbsSumRenderer";

export const maxAbsoluteSumProblem: LeetCodeProblem<number[], AbsSumData, Record<string, never>> = {
  id: "maximum-absolute-sum-of-any-subarray",
  number: 1749,
  title: "Maximum Absolute Sum of Any Subarray",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/",
  summary: "Track the max and min subarray sums with dual Kadane; the answer is max(maxSum, −minSum).",
  prompt: "Return the maximum absolute value of the sum of any (possibly empty) subarray of nums.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Dynamic Programming", "Kadane"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, -3, 2, 3, -4],
  defaultOptions: {},
  buildSteps: (input) => absSumSteps(input),
  Renderer: AbsSumRenderer,
};
