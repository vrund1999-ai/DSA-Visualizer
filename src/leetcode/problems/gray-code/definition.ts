import type { LeetCodeProblem } from "../../types";
import type { GrayData } from "./algorithm";
import { graySteps } from "./algorithm";
import { CODE } from "./code";
import { GrayRenderer } from "./GrayRenderer";

export const grayCodeProblem: LeetCodeProblem<number, GrayData, Record<string, never>> = {
  id: "gray-code",
  number: 89,
  title: "Gray Code",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/gray-code/",
  summary: "The formula i XOR (i >> 1) yields a sequence where every adjacent pair differs by exactly one bit.",
  prompt:
    "Return an n-bit gray code sequence: a permutation of 0…2ⁿ−1 starting at 0 where consecutive numbers " +
    "(and the first/last) differ in exactly one bit.",
  topics: ["Math", "Backtracking", "Bit Manipulation"],
  tags: ["Bit Manipulation", "Math"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(2ⁿ)", timeWorst: "O(2ⁿ)", space: "O(2ⁿ)" },
  inputSchema: [],
  makeDefaultInput: () => 3,
  defaultOptions: {},
  buildSteps: (input) => graySteps(input),
  Renderer: GrayRenderer,
};
