import type { LeetCodeProblem } from "../../types";
import type { ZeroArrayData } from "./algorithm";
import { zeroArraySteps } from "./algorithm";
import { CODE } from "./code";
import { ZeroArrayRenderer } from "./ZeroArrayRenderer";

interface ZeroArrayInput {
  nums: number[];
  queries: number[][];
}

export const zeroArrayTransformationProblem: LeetCodeProblem<ZeroArrayInput, ZeroArrayData, Record<string, never>> = {
  id: "zero-array-transformation-i",
  number: 3355,
  title: "Zero Array Transformation I",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/zero-array-transformation-i/",
  summary: "A difference array counts each index's available decrements; the array zeros out iff every value fits.",
  prompt:
    "Each query [l, r] lets you decrement any subset of indices in that range by 1. After processing all " +
    "queries in order, can nums become all zeros? (Order does not matter for feasibility.)",
  topics: ["Array", "Prefix Sum"],
  tags: ["Prefix Sum", "Difference Array"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + q)", timeWorst: "O(n + q)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 1], queries: [[0, 2], [1, 1]] }),
  defaultOptions: {},
  buildSteps: (input) => zeroArraySteps(input.nums, input.queries),
  Renderer: ZeroArrayRenderer,
};
