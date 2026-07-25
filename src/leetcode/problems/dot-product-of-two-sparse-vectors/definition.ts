import type { LeetCodeProblem } from "../../types";
import type { SparseDotData } from "./algorithm";
import { sparseDotSteps } from "./algorithm";
import { CODE } from "./code";
import { SparseDotRenderer } from "./SparseDotRenderer";

interface SparseDotInput {
  a: number[];
  b: number[];
}

export const dotProductSparseProblem: LeetCodeProblem<SparseDotInput, SparseDotData, Record<string, never>> = {
  id: "dot-product-of-two-sparse-vectors",
  number: 1570,
  title: "Dot Product of Two Sparse Vectors",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/dot-product-of-two-sparse-vectors/",
  summary: "Store non-zero (index, value) pairs; two-pointer over shared indices.",
  prompt:
    "Given two sparse vectors, compute their dot product efficiently by representing each " +
    "as its list of non-zero entries and only multiplying indices present in both.",
  topics: ["Array", "Hash Table", "Two Pointers", "Design"],
  tags: ["Array", "Two Pointers", "Design"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ a: [1, 0, 0, 2, 3], b: [0, 3, 0, 4, 0] }),
  defaultOptions: {},
  buildSteps: (input) => sparseDotSteps(input.a, input.b),
  Renderer: SparseDotRenderer,
};
