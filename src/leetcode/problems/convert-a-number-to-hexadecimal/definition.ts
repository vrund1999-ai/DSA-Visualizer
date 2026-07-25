import type { LeetCodeProblem } from "../../types";
import type { HexData } from "./algorithm";
import { hexSteps } from "./algorithm";
import { CODE } from "./code";
import { HexRenderer } from "./HexRenderer";

export const convertToHexProblem: LeetCodeProblem<number, HexData, Record<string, never>> = {
  id: "convert-a-number-to-hexadecimal",
  number: 405,
  title: "Convert a Number to Hexadecimal",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/",
  summary: "Repeatedly take the low 4 bits as a hex digit and shift right, using two's complement for negatives.",
  prompt:
    "Given a 32-bit integer num, return its hexadecimal representation as a lowercase string. For " +
    "negative numbers use the two's complement method (no leading zeros, '0' for zero).",
  topics: ["Math", "Bit Manipulation"],
  tags: ["Math", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => 26,
  defaultOptions: {},
  buildSteps: (input) => hexSteps(input),
  Renderer: HexRenderer,
};
