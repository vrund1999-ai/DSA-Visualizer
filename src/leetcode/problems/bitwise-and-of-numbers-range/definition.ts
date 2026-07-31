import type { LeetCodeProblem } from "../../types";
import type { RangeAndData } from "./algorithm";
import { rangeAndSteps } from "./algorithm";
import { CODE } from "./code";
import { RangeAndRenderer } from "./RangeAndRenderer";

interface RangeAndInput {
  left: number;
  right: number;
}

export const rangeBitwiseAndProblem: LeetCodeProblem<RangeAndInput, RangeAndData, Record<string, never>> = {
  id: "bitwise-and-of-numbers-range",
  number: 201,
  title: "Bitwise AND of Numbers Range",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
  summary: "The AND over a range keeps only the common leading bits; shift both ends right until equal, then shift back.",
  prompt: "Given a range [left, right], return the bitwise AND of all numbers in the range, inclusive.",
  topics: ["Bit Manipulation"],
  tags: ["Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ left: 5, right: 7 }),
  defaultOptions: {},
  buildSteps: (input) => rangeAndSteps(input.left, input.right),
  Renderer: RangeAndRenderer,
};
