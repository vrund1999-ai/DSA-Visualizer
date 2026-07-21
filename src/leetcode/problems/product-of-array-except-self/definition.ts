import type { LeetCodeProblem } from "../../types";
import type { ProductData } from "./algorithm";
import { productSteps } from "./algorithm";
import { CODE } from "./code";
import { ProductRenderer } from "./ProductRenderer";

export const productExceptSelfProblem: LeetCodeProblem<
  number[],
  ProductData,
  Record<string, never>
> = {
  id: "product-of-array-except-self",
  number: 238,
  title: "Product of Array Except Self",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/product-of-array-except-self/",
  summary: "Products of all other elements, without division.",
  prompt:
    "Given an integer array `nums`, return an array `answer` where answer[i] is " +
    "the product of all elements of nums except nums[i]. Solve it without " +
    "division in O(n) time.",
  topics: ["Array", "Prefix Sum"],
  tags: ["Array", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 58.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4],
  defaultOptions: {},
  buildSteps: (input) => productSteps(input),
  Renderer: ProductRenderer,
};
