import type { LeetCodeProblem } from "../../types";
import type { DivideData } from "./algorithm";
import { divideSteps } from "./algorithm";
import { CODE } from "./code";
import { DivideRenderer } from "./DivideRenderer";

interface DivideInput {
  dividend: number;
  divisor: number;
}

export const divideTwoIntegersProblem: LeetCodeProblem<DivideInput, DivideData, Record<string, never>> = {
  id: "divide-two-integers",
  number: 29,
  title: "Divide Two Integers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/divide-two-integers/",
  summary: "Integer division via repeated doubling — no *, /, or % operators.",
  prompt:
    "Divide two integers without using multiplication, division, or the mod operator. " +
    "Truncate toward zero and return the quotient.",
  topics: ["Math", "Bit Manipulation"],
  tags: ["Math", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 44.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log² n)", timeWorst: "O(log² n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ dividend: 93, divisor: 7 }),
  defaultOptions: {},
  buildSteps: (input) => divideSteps(input.dividend, input.divisor),
  Renderer: DivideRenderer,
};
