import type { LeetCodeProblem } from "../../types";
import type { RangeSumData, RangeSumInput } from "./algorithm";
import { rangeSumSteps } from "./algorithm";
import { CODE } from "./code";
import { RangeSumRenderer } from "./RangeSumRenderer";

export const rangeSumQueryProblem: LeetCodeProblem<
  RangeSumInput,
  RangeSumData,
  Record<string, never>
> = {
  id: "range-sum-query-immutable",
  number: 303,
  title: "Range Sum Query - Immutable",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/range-sum-query-immutable/",
  summary: "O(1) range sums via a precomputed prefix array.",
  prompt:
    "Design a structure over an immutable array that answers sumRange(i, j) — the " +
    "sum of nums[i..j] inclusive — in O(1) time after O(n) preprocessing.",
  topics: ["Array", "Design", "Prefix Sum"],
  tags: ["Array", "Design", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) query", timeWorst: "O(n) build", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [-2, 0, 3, -5, 2, -1], queries: [[0, 2], [2, 5], [0, 5]] }),
  defaultOptions: {},
  buildSteps: (input) => rangeSumSteps(input),
  Renderer: RangeSumRenderer,
};
