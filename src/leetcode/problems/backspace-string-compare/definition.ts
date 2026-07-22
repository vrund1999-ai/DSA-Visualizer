import type { LeetCodeProblem } from "../../types";
import type { BackspaceData, BackspaceInput } from "./algorithm";
import { backspaceSteps } from "./algorithm";
import { CODE } from "./code";
import { BackspaceRenderer } from "./BackspaceRenderer";

export const backspaceCompareProblem: LeetCodeProblem<
  BackspaceInput,
  BackspaceData,
  Record<string, never>
> = {
  id: "backspace-string-compare",
  number: 844,
  title: "Backspace String Compare",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/backspace-string-compare/",
  summary: "Compare two strings after applying '#' backspaces.",
  prompt:
    "Given two strings `s` and `t`, where '#' means a backspace, return true if " +
    "they are equal after all backspaces are applied.",
  topics: ["Two Pointers", "String", "Stack", "Simulation"],
  tags: ["Two Pointers", "String", "Stack", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "ab#c", t: "ad#c" }),
  defaultOptions: {},
  buildSteps: (input) => backspaceSteps(input),
  Renderer: BackspaceRenderer,
};
