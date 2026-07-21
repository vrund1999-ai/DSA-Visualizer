import type { LeetCodeProblem } from "../../types";
import type { ThreeSumData } from "./algorithm";
import { threeSumSteps } from "./algorithm";
import { CODE } from "./code";
import { ThreeSumRenderer } from "./ThreeSumRenderer";

export const threeSumProblem: LeetCodeProblem<
  number[],
  ThreeSumData,
  Record<string, never>
> = {
  id: "3sum",
  number: 15,
  title: "3Sum",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/3sum/",
  summary: "Find all unique triplets that sum to zero.",
  prompt:
    "Given an integer array `nums`, return all unique triplets " +
    "[nums[i], nums[j], nums[k]] such that i, j, k are distinct and the three " +
    "values sum to 0. The solution set must not contain duplicate triplets.",
  topics: ["Array", "Two Pointers", "Sorting"],
  tags: ["Array", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 79.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [-1, 0, 1, 2, -1, -4],
  defaultOptions: {},
  buildSteps: (input) => threeSumSteps(input),
  Renderer: ThreeSumRenderer,
};
