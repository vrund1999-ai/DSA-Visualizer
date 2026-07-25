import type { LeetCodeProblem } from "../../types";
import type { ComplementData } from "./algorithm";
import { complementSteps } from "./algorithm";
import { CODE } from "./code";
import { ComplementRenderer } from "./ComplementRenderer";

export const complementBase10Problem: LeetCodeProblem<number, ComplementData, Record<string, never>> = {
  id: "complement-of-base-10-integer",
  number: 1009,
  title: "Complement of Base 10 Integer",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/complement-of-base-10-integer/",
  summary: "XOR with an all-ones mask of the number's own bit width flips every bit.",
  prompt:
    "The complement of an integer flips each bit of its binary representation. Given a " +
    "non-negative integer n, return its complement.",
  topics: ["Math", "Bit Manipulation"],
  tags: ["Math", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 30.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 5,
  defaultOptions: {},
  buildSteps: (input) => complementSteps(input),
  Renderer: ComplementRenderer,
};
