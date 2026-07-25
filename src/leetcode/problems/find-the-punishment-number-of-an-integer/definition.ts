import type { LeetCodeProblem } from "../../types";
import type { PunishmentData } from "./algorithm";
import { punishmentSteps } from "./algorithm";
import { CODE } from "./code";
import { PunishmentRenderer } from "./PunishmentRenderer";

export const punishmentNumberProblem: LeetCodeProblem<number, PunishmentData, Record<string, never>> = {
  id: "find-the-punishment-number-of-an-integer",
  number: 2698,
  title: "Find the Punishment Number of an Integer",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-the-punishment-number-of-an-integer/",
  summary: "Sum i·i whose decimal digits can be split into contiguous chunks adding up to i.",
  prompt:
    "The punishment number of n is the sum of i·i for every 1 ≤ i ≤ n such that the digits of i·i " +
    "can be partitioned into contiguous substrings whose integer values sum to i.",
  topics: ["Math", "Backtracking"],
  tags: ["Math", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n · 2^d)", timeWorst: "O(n · 2^d)", space: "O(d)" },
  inputSchema: [],
  makeDefaultInput: () => 10,
  defaultOptions: {},
  buildSteps: (input) => punishmentSteps(input),
  Renderer: PunishmentRenderer,
};
