import type { LeetCodeProblem } from "../../types";
import type { MaxOnesData } from "./algorithm";
import { maxOnesSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxOnesRenderer } from "./MaxOnesRenderer";

export const maxConsecutiveOnesProblem: LeetCodeProblem<
  number[],
  MaxOnesData,
  Record<string, never>
> = {
  id: "max-consecutive-ones",
  number: 485,
  title: "Max Consecutive Ones",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/max-consecutive-ones/",
  summary: "Longest run of consecutive 1s in a binary array.",
  prompt:
    "Given a binary array `nums`, return the maximum number of consecutive 1's " +
    "in the array.",
  topics: ["Array"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 57.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 1, 0, 1, 1, 1],
  defaultOptions: {},
  buildSteps: (input) => maxOnesSteps(input),
  Renderer: MaxOnesRenderer,
};
