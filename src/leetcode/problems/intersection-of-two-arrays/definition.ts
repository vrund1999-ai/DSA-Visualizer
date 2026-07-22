import type { LeetCodeProblem } from "../../types";
import type { IntersectionData, IntersectionInput } from "./algorithm";
import { intersectionSteps } from "./algorithm";
import { CODE } from "./code";
import { IntersectionRenderer } from "./IntersectionRenderer";

export const intersectionProblem: LeetCodeProblem<
  IntersectionInput,
  IntersectionData,
  Record<string, never>
> = {
  id: "intersection-of-two-arrays",
  number: 349,
  title: "Intersection of Two Arrays",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/intersection-of-two-arrays/",
  summary: "Unique shared values via a hash set.",
  prompt:
    "Given two arrays `nums1` and `nums2`, return an array of their intersection " +
    "— each element in the result must be unique, in any order.",
  topics: ["Array", "Hash Table", "Two Pointers", "Sorting"],
  tags: ["Array", "Hash Table", "Two Pointers", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 52.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + m)", timeWorst: "O(n + m)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] }),
  defaultOptions: {},
  buildSteps: (input) => intersectionSteps(input),
  Renderer: IntersectionRenderer,
};
