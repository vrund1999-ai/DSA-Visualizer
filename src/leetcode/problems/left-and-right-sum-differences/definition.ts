import type { LeetCodeProblem } from "../../types";
import type { LeftRightData } from "./algorithm";
import { leftRightSteps } from "./algorithm";
import { CODE } from "./code";
import { LeftRightRenderer } from "./LeftRightRenderer";

export const leftRightSumDifferencesProblem: LeetCodeProblem<number[], LeftRightData, Record<string, never>> = {
  id: "left-and-right-sum-differences",
  number: 2574,
  title: "Left and Right Sum Differences",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/left-and-right-sum-differences/",
  summary: "Keep a running left prefix sum; right = total − left − nums[i]; answer is |left − right|.",
  prompt:
    "Return an array where answer[i] = |leftSum[i] − rightSum[i]|, the absolute difference of the sums " +
    "strictly left and strictly right of index i.",
  topics: ["Array", "Prefix Sum"],
  tags: ["Array", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [10, 4, 8, 3],
  defaultOptions: {},
  buildSteps: (input) => leftRightSteps(input),
  Renderer: LeftRightRenderer,
};
