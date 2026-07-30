import type { LeetCodeProblem } from "../../types";
import type { RangeSum2DData } from "./algorithm";
import { rangeSum2DSteps } from "./algorithm";
import { CODE } from "./code";
import { RangeSum2DRenderer } from "./RangeSum2DRenderer";

interface RangeSum2DInput {
  matrix: number[][];
  queries: [number, number, number, number][];
}

export const rangeSumQuery2DProblem: LeetCodeProblem<RangeSum2DInput, RangeSum2DData, Record<string, never>> = {
  id: "range-sum-query-2d-immutable",
  number: 304,
  title: "Range Sum Query 2D - Immutable",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
  summary: "A padded prefix-sum grid answers any rectangle sum in four lookups via inclusion–exclusion.",
  prompt:
    "Preprocess a matrix so that repeated sumRegion(r1, c1, r2, c2) queries — the sum of the submatrix " +
    "between those corners — run in O(1).",
  topics: ["Array", "Matrix", "Prefix Sum", "Design"],
  tags: ["Matrix", "Prefix Sum", "Design"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) per query", timeWorst: "O(RC) build", space: "O(RC)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    matrix: [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5],
    ],
    queries: [
      [2, 1, 4, 3],
      [1, 1, 2, 2],
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => rangeSum2DSteps(input.matrix, input.queries),
  Renderer: RangeSum2DRenderer,
};
