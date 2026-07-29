import type { LeetCodeProblem } from "../../types";
import type { IntersectData } from "./algorithm";
import { intersectSteps } from "./algorithm";
import { CODE } from "./code";
import { IntersectRenderer } from "./IntersectRenderer";

interface IntersectInput {
  nums1: number[];
  nums2: number[];
}

export const intersectionTwoArraysIIProblem: LeetCodeProblem<IntersectInput, IntersectData, Record<string, never>> = {
  id: "intersection-of-two-arrays-ii",
  number: 350,
  title: "Intersection of Two Arrays II",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
  summary: "Tally the first array's values, then consume matching counts while scanning the second.",
  prompt:
    "Given two integer arrays, return their intersection including multiplicity — each element " +
    "appears as many times as it shows in both arrays.",
  topics: ["Array", "Hash Table", "Two Pointers", "Sorting"],
  tags: ["Array", "Hash Table", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + m)", timeWorst: "O(n + m)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] }),
  defaultOptions: {},
  buildSteps: (input) => intersectSteps(input.nums1, input.nums2),
  Renderer: IntersectRenderer,
};
