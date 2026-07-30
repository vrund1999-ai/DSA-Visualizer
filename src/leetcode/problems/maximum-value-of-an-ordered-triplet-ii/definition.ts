import type { LeetCodeProblem } from "../../types";
import type { TripletData } from "./algorithm";
import { tripletSteps } from "./algorithm";
import { CODE } from "./code";
import { TripletRenderer } from "./TripletRenderer";

export const orderedTripletProblem: LeetCodeProblem<number[], TripletData, Record<string, never>> = {
  id: "maximum-value-of-an-ordered-triplet-ii",
  number: 2874,
  title: "Maximum Value of an Ordered Triplet II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/",
  summary: "One pass keeps the best nums[i], the best (nums[i]−nums[j]), and combines it with each nums[k].",
  prompt:
    "Return the maximum value over all triplets i < j < k of (nums[i] − nums[j]) × nums[k]. If every such " +
    "value is negative, return 0.",
  topics: ["Array"],
  tags: ["Array", "Prefix"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [12, 6, 1, 2, 7],
  defaultOptions: {},
  buildSteps: (input) => tripletSteps(input),
  Renderer: TripletRenderer,
};
