import type { LeetCodeProblem } from "../../types";
import type { AtoiData } from "./algorithm";
import { atoiSteps } from "./algorithm";
import { CODE } from "./code";
import { AtoiRenderer } from "./AtoiRenderer";

export const atoiProblem: LeetCodeProblem<
  string,
  AtoiData,
  Record<string, never>
> = {
  id: "string-to-integer-atoi",
  number: 8,
  title: "String to Integer (atoi)",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/string-to-integer-atoi/",
  summary: "Parse a leading integer from a string, clamped to 32 bits.",
  prompt:
    "Implement atoi: skip leading whitespace, read an optional sign, then read " +
    "digits until a non-digit. Clamp the result to the signed 32-bit range.",
  topics: ["String"],
  tags: ["String"],
  companies: ["Bloomberg"],
  frequency: 62.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "   -42abc",
  defaultOptions: {},
  buildSteps: (input) => atoiSteps(input),
  Renderer: AtoiRenderer,
};
