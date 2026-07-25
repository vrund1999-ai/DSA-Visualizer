import type { LeetCodeProblem } from "../../types";
import type { BinarySubstrData } from "./algorithm";
import { binarySubstrSteps } from "./algorithm";
import { CODE } from "./code";
import { BinarySubstrRenderer } from "./BinarySubstrRenderer";

export const countBinarySubstringsProblem: LeetCodeProblem<string, BinarySubstrData, Record<string, never>> = {
  id: "count-binary-substrings",
  number: 696,
  title: "Count Binary Substrings",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/count-binary-substrings/",
  summary: "Each run boundary contributes min(prev run, current run) valid substrings.",
  prompt:
    "Count the substrings of a binary string that have equal numbers of 0s and 1s, with all the " +
    "0s and all the 1s grouped consecutively. Repeated substrings count each occurrence.",
  topics: ["Two Pointers", "String"],
  tags: ["Two Pointers", "String"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "00110011",
  defaultOptions: {},
  buildSteps: (input) => binarySubstrSteps(input),
  Renderer: BinarySubstrRenderer,
};
