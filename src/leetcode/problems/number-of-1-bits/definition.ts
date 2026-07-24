import type { LeetCodeProblem } from "../../types";
import type { OneBitsData } from "./algorithm";
import { oneBitsSteps } from "./algorithm";
import { CODE } from "./code";
import { OneBitsRenderer } from "./OneBitsRenderer";

export const numberOf1BitsProblem: LeetCodeProblem<
  number,
  OneBitsData,
  Record<string, never>
> = {
  id: "number-of-1-bits",
  number: 191,
  title: "Number of 1 Bits",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/number-of-1-bits/",
  summary: "Count set bits with Brian Kernighan's trick.",
  prompt:
    "Given an unsigned integer `n`, return the number of '1' bits in its binary " +
    "representation (its Hamming weight).",
  topics: ["Divide and Conquer", "Bit Manipulation"],
  tags: ["Divide and Conquer", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 18,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(set bits)", timeWorst: "O(32)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 182,
  defaultOptions: {},
  buildSteps: (input) => oneBitsSteps(input),
  Renderer: OneBitsRenderer,
};
