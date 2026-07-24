import type { LeetCodeProblem } from "../../types";
import type { ThreeSumClosestData, ThreeSumClosestInput } from "./algorithm";
import { threeSumClosestSteps } from "./algorithm";
import { CODE } from "./code";
import { ThreeSumClosestRenderer } from "./ThreeSumClosestRenderer";

export const threeSumClosestProblem: LeetCodeProblem<
  ThreeSumClosestInput,
  ThreeSumClosestData,
  Record<string, never>
> = {
  id: "3sum-closest",
  number: 16,
  title: "3Sum Closest",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/3sum-closest/",
  summary: "Triple sum nearest to a target (sort + two pointers).",
  prompt:
    "Given an array `nums` and a `target`, find three integers whose sum is " +
    "closest to target and return that sum. Each input has exactly one solution.",
  topics: ["Array", "Two Pointers", "Sorting"],
  tags: ["Array", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 56,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [-1, 2, 1, -4], target: 1 }),
  defaultOptions: {},
  buildSteps: (input) => threeSumClosestSteps(input),
  Renderer: ThreeSumClosestRenderer,
};
