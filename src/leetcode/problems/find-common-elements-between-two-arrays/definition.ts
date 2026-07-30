import type { LeetCodeProblem } from "../../types";
import type { CommonData } from "./algorithm";
import { commonSteps } from "./algorithm";
import { CODE } from "./code";
import { CommonRenderer } from "./CommonRenderer";

interface CommonInput {
  nums1: number[];
  nums2: number[];
}

export const findCommonElementsProblem: LeetCodeProblem<CommonInput, CommonData, Record<string, never>> = {
  id: "find-common-elements-between-two-arrays",
  number: 2956,
  title: "Find Common Elements Between Two Arrays",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-common-elements-between-two-arrays/",
  summary: "Two membership sets: count how many entries of each array hold a value present in the other.",
  prompt:
    "Return [answer1, answer2] where answer1 is the number of indices i with nums1[i] present in nums2, and " +
    "answer2 the number of indices j with nums2[j] present in nums1.",
  topics: ["Array", "Hash Table"],
  tags: ["Hash Table", "Array"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m+n)", timeWorst: "O(m+n)", space: "O(m+n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums1: [4, 3, 2, 3, 1], nums2: [2, 2, 5, 2, 3, 6] }),
  defaultOptions: {},
  buildSteps: (input) => commonSteps(input.nums1, input.nums2),
  Renderer: CommonRenderer,
};
