import type { LeetCodeProblem } from "../../types";
import type { MaxProductData } from "./algorithm";
import { maxProductSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxProductRenderer } from "./MaxProductRenderer";

export const maximumProductSubarrayProblem: LeetCodeProblem<
  number[],
  MaxProductData,
  Record<string, never>
> = {
  id: "maximum-product-subarray",
  number: 152,
  title: "Maximum Product Subarray",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-product-subarray/",
  summary: "Largest product of a contiguous subarray (track max & min).",
  prompt:
    "Given an integer array `nums`, find the contiguous subarray with the " +
    "largest product and return that product.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 52.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 3, -2, 4, -1],
  defaultOptions: {},
  buildSteps: (input) => maxProductSteps(input),
  Renderer: MaxProductRenderer,
};
