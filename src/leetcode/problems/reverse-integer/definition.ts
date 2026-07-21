import type { LeetCodeProblem } from "../../types";
import type { ReverseIntData } from "./algorithm";
import { reverseIntSteps } from "./algorithm";
import { CODE } from "./code";
import { ReverseIntRenderer } from "./ReverseIntRenderer";

export const reverseIntegerProblem: LeetCodeProblem<
  number,
  ReverseIntData,
  Record<string, never>
> = {
  id: "reverse-integer",
  number: 7,
  title: "Reverse Integer",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/reverse-integer/",
  summary: "Reverse a 32-bit integer's digits, guarding overflow.",
  prompt:
    "Given a signed 32-bit integer `x`, return `x` with its digits reversed. If " +
    "reversing causes the value to fall outside the 32-bit signed range, return 0.",
  topics: ["Math"],
  tags: ["Math"],
  companies: ["Bloomberg"],
  frequency: 75.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(d)", timeWorst: "O(d)", space: "O(d)" },
  inputSchema: [],
  makeDefaultInput: () => 123,
  defaultOptions: {},
  buildSteps: (input) => reverseIntSteps(input),
  Renderer: ReverseIntRenderer,
};
