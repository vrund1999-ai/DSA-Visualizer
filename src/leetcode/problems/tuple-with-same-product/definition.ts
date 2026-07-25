import type { LeetCodeProblem } from "../../types";
import type { TupleData } from "./algorithm";
import { tupleSteps } from "./algorithm";
import { CODE } from "./code";
import { TupleRenderer } from "./TupleRenderer";

export const tupleWithSameProductProblem: LeetCodeProblem<number[], TupleData, Record<string, never>> = {
  id: "tuple-with-same-product",
  number: 1726,
  title: "Tuple with Same Product",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/tuple-with-same-product/",
  summary: "Count pairs per product; each matching earlier pair contributes 8 ordered tuples.",
  prompt:
    "Given an array of distinct positive integers, return the number of tuples (a, b, c, d) " +
    "such that a·b = c·d, where a, b, c, d are distinct elements.",
  topics: ["Array", "Hash Table"],
  tags: ["Array", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 3, 4, 6],
  defaultOptions: {},
  buildSteps: (input) => tupleSteps(input),
  Renderer: TupleRenderer,
};
