import type { LeetCodeProblem } from "../../types";
import type { HiddenData } from "./algorithm";
import { hiddenSteps } from "./algorithm";
import { CODE } from "./code";
import { HiddenRenderer } from "./HiddenRenderer";

interface HiddenInput {
  differences: number[];
  lower: number;
  upper: number;
}

export const countHiddenSequencesProblem: LeetCodeProblem<HiddenInput, HiddenData, Record<string, never>> = {
  id: "count-the-hidden-sequences",
  number: 2145,
  title: "Count the Hidden Sequences",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/count-the-hidden-sequences/",
  summary: "The array shifts rigidly with x[0]; valid starts = (upper−lower) − (max−min prefix) + 1.",
  prompt:
    "Given consecutive differences of a hidden array and bounds [lower, upper], return how many hidden " +
    "arrays are consistent with the differences and stay within the bounds.",
  topics: ["Array", "Prefix Sum"],
  tags: ["Array", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ differences: [1, -3, 4], lower: 1, upper: 6 }),
  defaultOptions: {},
  buildSteps: (input) => hiddenSteps(input.differences, input.lower, input.upper),
  Renderer: HiddenRenderer,
};
