import type { LeetCodeProblem } from "../../types";
import type { RotateStringData } from "./algorithm";
import { rotateStringSteps } from "./algorithm";
import { CODE } from "./code";
import { RotateStringRenderer } from "./RotateStringRenderer";

interface RotateStringInput {
  s: string;
  goal: string;
}

export const rotateStringProblem: LeetCodeProblem<RotateStringInput, RotateStringData, Record<string, never>> = {
  id: "rotate-string",
  number: 796,
  title: "Rotate String",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/rotate-string/",
  summary: "goal is a rotation of s iff it is a substring of s+s.",
  prompt:
    "Given two strings s and goal, return true if s can become goal after some number " +
    "of left shifts (moving the leftmost character to the end).",
  topics: ["String", "String Matching"],
  tags: ["String", "String Matching"],
  companies: ["Bloomberg"],
  frequency: 48.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "abcde", goal: "cdeab" }),
  defaultOptions: {},
  buildSteps: (input) => rotateStringSteps(input.s, input.goal),
  Renderer: RotateStringRenderer,
};
