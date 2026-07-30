import type { LeetCodeProblem } from "../../types";
import type { IntersectionData } from "./algorithm";
import { intersectionSteps } from "./algorithm";
import { CODE } from "./code";
import { IntersectionRenderer } from "./IntersectionRenderer";

interface IntersectionInput {
  A: number[][];
  B: number[][];
}

export const intervalIntersectionsProblem: LeetCodeProblem<IntersectionInput, IntersectionData, Record<string, never>> = {
  id: "interval-list-intersections",
  number: 986,
  title: "Interval List Intersections",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/interval-list-intersections/",
  summary: "Two pointers sweep both sorted lists; the overlap is [max start, min end], advancing the earlier end.",
  prompt:
    "Given two lists of closed, sorted, pairwise-disjoint intervals, return their intersection (the ranges " +
    "covered by both).",
  topics: ["Array", "Two Pointers", "Intervals"],
  tags: ["Two Pointers", "Intervals"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m + n)", timeWorst: "O(m + n)", space: "O(m + n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    A: [[0, 2], [5, 10], [13, 23], [24, 25]],
    B: [[1, 5], [8, 12], [15, 24], [25, 26]],
  }),
  defaultOptions: {},
  buildSteps: (input) => intersectionSteps(input.A, input.B),
  Renderer: IntersectionRenderer,
};
