import type { LeetCodeProblem } from "../../types";
import type { TripletData } from "./algorithm";
import { tripletSteps } from "./algorithm";
import { CODE } from "./code";
import { TripletRenderer } from "./TripletRenderer";

export const increasingTripletProblem: LeetCodeProblem<number[], TripletData, Record<string, never>> = {
  id: "increasing-triplet-subsequence",
  number: 334,
  title: "Increasing Triplet Subsequence",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/increasing-triplet-subsequence/",
  summary: "Track the two smallest chain values; a third larger element proves a triple.",
  prompt:
    "Given an integer array nums, return true if there exists an increasing subsequence " +
    "of length three (indices i < j < k with nums[i] < nums[j] < nums[k]).",
  topics: ["Array", "Greedy"],
  tags: ["Array", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 1, 5, 0, 4, 6],
  defaultOptions: {},
  buildSteps: (input) => tripletSteps(input),
  Renderer: TripletRenderer,
};
