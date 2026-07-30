import type { LeetCodeProblem } from "../../types";
import type { CircularData } from "./algorithm";
import { circularSteps } from "./algorithm";
import { CODE } from "./code";
import { CircularRenderer } from "./CircularRenderer";

export const maxSumCircularSubarrayProblem: LeetCodeProblem<number[], CircularData, Record<string, never>> = {
  id: "maximum-sum-circular-subarray",
  number: 918,
  title: "Maximum Sum Circular Subarray",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
  summary: "The answer is the larger of a normal max subarray and (total − min subarray) for the wrapping case.",
  prompt:
    "Given a circular integer array, return the maximum possible sum of a non-empty subarray (which may " +
    "wrap around from the end to the beginning).",
  topics: ["Array", "Divide and Conquer", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [5, -3, 5],
  defaultOptions: {},
  buildSteps: (input) => circularSteps(input),
  Renderer: CircularRenderer,
};
