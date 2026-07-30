import type { LeetCodeProblem } from "../../types";
import type { TwoKeysData } from "./algorithm";
import { twoKeysSteps } from "./algorithm";
import { CODE } from "./code";
import { TwoKeysRenderer } from "./TwoKeysRenderer";

export const twoKeysKeyboardProblem: LeetCodeProblem<number, TwoKeysData, Record<string, never>> = {
  id: "2-keys-keyboard",
  number: 650,
  title: "2 Keys Keyboard",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/2-keys-keyboard/",
  summary: "Copy-All then Paste to build a group; the minimum operations equal the sum of n's prime factors.",
  prompt:
    "Starting with a single 'A', you may Copy All (the whole current text) and Paste. Return the minimum " +
    "operations to get exactly n copies of 'A'.",
  topics: ["Math", "Dynamic Programming"],
  tags: ["Math", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(√n)", timeWorst: "O(√n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => 12,
  defaultOptions: {},
  buildSteps: (input) => twoKeysSteps(input),
  Renderer: TwoKeysRenderer,
};
