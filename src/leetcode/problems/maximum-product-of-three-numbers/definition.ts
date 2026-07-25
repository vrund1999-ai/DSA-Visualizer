import type { LeetCodeProblem } from "../../types";
import type { MaxProductData } from "./algorithm";
import { maxProductSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxProductRenderer } from "./MaxProductRenderer";

export const maximumProductOfThreeNumbersProblem: LeetCodeProblem<number[], MaxProductData, Record<string, never>> = {
  id: "maximum-product-of-three-numbers",
  number: 628,
  title: "Maximum Product of Three Numbers",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/maximum-product-of-three-numbers/",
  summary: "Sort, then compare the three largest against the two smallest times the largest.",
  prompt: "Given an integer array nums, find three numbers whose product is maximum and return that product.",
  topics: ["Array", "Math", "Sorting"],
  tags: ["Array", "Math", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [-4, -3, 1, 2, 5],
  defaultOptions: {},
  buildSteps: (input) => maxProductSteps(input),
  Renderer: MaxProductRenderer,
};
