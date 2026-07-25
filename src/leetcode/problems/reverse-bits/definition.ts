import type { LeetCodeProblem } from "../../types";
import type { ReverseBitsData } from "./algorithm";
import { reverseBitsSteps } from "./algorithm";
import { CODE } from "./code";
import { ReverseBitsRenderer } from "./ReverseBitsRenderer";

export const reverseBitsProblem: LeetCodeProblem<number, ReverseBitsData, Record<string, never>> = {
  id: "reverse-bits",
  number: 190,
  title: "Reverse Bits",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/reverse-bits/",
  summary: "Mirror each bit i to position 31−i, OR-ing it into the result.",
  prompt: "Reverse the bits of a given 32-bit unsigned integer and return the result.",
  topics: ["Divide and Conquer", "Bit Manipulation"],
  tags: ["Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 43261596,
  defaultOptions: {},
  buildSteps: (input) => reverseBitsSteps(input),
  Renderer: ReverseBitsRenderer,
};
