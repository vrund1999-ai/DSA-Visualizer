import type { LeetCodeProblem } from "../../types";
import type { DiffData } from "./algorithm";
import { diffSteps } from "./algorithm";
import { CODE } from "./code";
import { DiffRenderer } from "./DiffRenderer";

interface DiffInput {
  nums1: number[];
  nums2: number[];
}

export const findDifferenceProblem: LeetCodeProblem<DiffInput, DiffData, Record<string, never>> = {
  id: "find-the-difference-of-two-arrays",
  number: 2215,
  title: "Find the Difference of Two Arrays",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-the-difference-of-two-arrays/",
  summary: "Two membership sets: collect the distinct values that appear in exactly one of the arrays.",
  prompt:
    "Return [answer0, answer1] where answer0 lists the distinct integers in nums1 not present in nums2, and " +
    "answer1 the distinct integers in nums2 not present in nums1.",
  topics: ["Array", "Hash Table"],
  tags: ["Hash Table", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m+n)", timeWorst: "O(m+n)", space: "O(m+n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums1: [1, 2, 3, 3], nums2: [1, 1, 2, 2] }),
  defaultOptions: {},
  buildSteps: (input) => diffSteps(input.nums1, input.nums2),
  Renderer: DiffRenderer,
};
