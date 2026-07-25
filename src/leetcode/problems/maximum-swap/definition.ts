import type { LeetCodeProblem } from "../../types";
import type { MaxSwapData } from "./algorithm";
import { maxSwapSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxSwapRenderer } from "./MaxSwapRenderer";

export const maximumSwapProblem: LeetCodeProblem<number, MaxSwapData, Record<string, never>> = {
  id: "maximum-swap",
  number: 670,
  title: "Maximum Swap",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-swap/",
  summary: "Swap the first digit with the largest bigger digit that occurs later.",
  prompt:
    "Given a non-negative integer num, you may swap two digits at most once. Return the " +
    "largest value you can obtain.",
  topics: ["Math", "Greedy"],
  tags: ["Math", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(d)", timeWorst: "O(d)", space: "O(d)" },
  inputSchema: [],
  makeDefaultInput: () => 2736,
  defaultOptions: {},
  buildSteps: (input) => maxSwapSteps(input),
  Renderer: MaxSwapRenderer,
};
