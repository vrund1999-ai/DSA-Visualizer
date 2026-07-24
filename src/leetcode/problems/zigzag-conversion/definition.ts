import type { LeetCodeProblem } from "../../types";
import type { ZigzagData, ZigzagInput } from "./algorithm";
import { zigzagSteps } from "./algorithm";
import { CODE } from "./code";
import { ZigzagRenderer } from "./ZigzagRenderer";

export const zigzagConversionProblem: LeetCodeProblem<
  ZigzagInput,
  ZigzagData,
  Record<string, never>
> = {
  id: "zigzag-conversion",
  number: 6,
  title: "Zigzag Conversion",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/zigzag-conversion/",
  summary: "Write a string in a zigzag across rows, then read row by row.",
  prompt:
    "Write the string `s` in a zigzag pattern across `numRows` rows, then read " +
    "it off row by row and return the resulting string.",
  topics: ["String"],
  tags: ["String"],
  companies: ["Bloomberg"],
  frequency: 56,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "PAYPALISHIRING", numRows: 3 }),
  defaultOptions: {},
  buildSteps: (input) => zigzagSteps(input),
  Renderer: ZigzagRenderer,
};
