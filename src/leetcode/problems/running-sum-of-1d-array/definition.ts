import type { LeetCodeProblem } from "../../types";
import type { RunningSumData } from "./algorithm";
import { runningSumSteps } from "./algorithm";
import { CODE } from "./code";
import { RunningSumRenderer } from "./RunningSumRenderer";

export const runningSumProblem: LeetCodeProblem<number[], RunningSumData, Record<string, never>> = {
  id: "running-sum-of-1d-array",
  number: 1480,
  title: "Running Sum of 1d Array",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/running-sum-of-1d-array/",
  summary: "One in-place pass turns the array into its prefix sums.",
  prompt:
    "Return the running sum of an array: the value at index i is the sum of nums[0..i].",
  topics: ["Array", "Prefix Sum"],
  tags: ["Array", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4],
  defaultOptions: {},
  buildSteps: (input) => runningSumSteps(input),
  Renderer: RunningSumRenderer,
};
