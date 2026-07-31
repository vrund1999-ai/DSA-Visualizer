import type { LeetCodeProblem } from "../../types";
import type { BrokenCalcData } from "./algorithm";
import { brokenCalcSteps } from "./algorithm";
import { CODE } from "./code";
import { BrokenCalcRenderer } from "./BrokenCalcRenderer";

interface BrokenCalcInput {
  startValue: number;
  target: number;
}

export const brokenCalculatorProblem: LeetCodeProblem<BrokenCalcInput, BrokenCalcData, Record<string, never>> = {
  id: "broken-calculator",
  number: 991,
  title: "Broken Calculator",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/broken-calculator/",
  summary: "Reverse the moves: halve an even target, +1 an odd one, then subtract 1 the rest of the way — greedy and optimal.",
  prompt:
    "A calculator shows startValue and can only double the number or subtract 1. Return the minimum number " +
    "of operations to display target.",
  topics: ["Math", "Greedy"],
  tags: ["Greedy", "Math"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log target)", timeWorst: "O(log target)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ startValue: 3, target: 10 }),
  defaultOptions: {},
  buildSteps: (input) => brokenCalcSteps(input.startValue, input.target),
  Renderer: BrokenCalcRenderer,
};
