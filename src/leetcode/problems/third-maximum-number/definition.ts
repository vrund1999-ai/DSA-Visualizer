import type { LeetCodeProblem } from "../../types";
import type { ThirdMaxData } from "./algorithm";
import { thirdMaxSteps } from "./algorithm";
import { CODE } from "./code";
import { ThirdMaxRenderer } from "./ThirdMaxRenderer";

export const thirdMaximumProblem: LeetCodeProblem<
  number[],
  ThirdMaxData,
  Record<string, never>
> = {
  id: "third-maximum-number",
  number: 414,
  title: "Third Maximum Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/third-maximum-number/",
  summary: "Third distinct maximum in one pass, else the max.",
  prompt:
    "Given an integer array `nums`, return the third distinct maximum. If it " +
    "doesn't exist, return the maximum.",
  topics: ["Array", "Sorting"],
  tags: ["Array", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 2, 3, 1],
  defaultOptions: {},
  buildSteps: (input) => thirdMaxSteps(input),
  Renderer: ThirdMaxRenderer,
};
