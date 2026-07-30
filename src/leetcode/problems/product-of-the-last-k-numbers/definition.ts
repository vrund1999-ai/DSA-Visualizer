import type { LeetCodeProblem } from "../../types";
import type { ProductData, ProductOp } from "./algorithm";
import { productSteps } from "./algorithm";
import { CODE } from "./code";
import { ProductRenderer } from "./ProductRenderer";

interface ProductInput {
  ops: ProductOp[];
}

export const productLastKProblem: LeetCodeProblem<ProductInput, ProductData, Record<string, never>> = {
  id: "product-of-the-last-k-numbers",
  number: 1352,
  title: "Product of the Last K Numbers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/product-of-the-last-k-numbers/",
  summary: "Running prefix products make getProduct(k) a single division; a zero resets the prefix so windows across it return 0.",
  prompt:
    "Implement add(num) and getProduct(k), which returns the product of the last k numbers added to the " +
    "stream.",
  topics: ["Array", "Math", "Design", "Data Stream", "Prefix Sum"],
  tags: ["Design", "Prefix Product"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) per op", timeWorst: "O(1)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    ops: [
      { type: "add", num: 3 },
      { type: "add", num: 0 },
      { type: "add", num: 2 },
      { type: "add", num: 5 },
      { type: "add", num: 4 },
      { type: "getProduct", k: 2 },
      { type: "getProduct", k: 3 },
      { type: "getProduct", k: 4 },
      { type: "add", num: 8 },
      { type: "getProduct", k: 2 },
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => productSteps(input.ops),
  Renderer: ProductRenderer,
};
