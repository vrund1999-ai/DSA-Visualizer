import type { LeetCodeProblem } from "../../types";
import type { ChipsData } from "./algorithm";
import { chipsSteps } from "./algorithm";
import { CODE } from "./code";
import { ChipsRenderer } from "./ChipsRenderer";

export const minCostMoveChipsProblem: LeetCodeProblem<number[], ChipsData, Record<string, never>> = {
  id: "minimum-cost-to-move-chips-to-the-same-position",
  number: 1217,
  title: "Minimum Cost to Move Chips to the Same Position",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/",
  summary: "Moving by 2 is free, so only parity matters: pay to move the smaller of the even/odd groups.",
  prompt:
    "Chips sit at given positions. Moving a chip by 2 costs 0; moving by 1 costs 1. Return the minimum " +
    "cost to gather all chips onto one position.",
  topics: ["Array", "Math", "Greedy"],
  tags: ["Array", "Math", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 2, 2, 3, 3],
  defaultOptions: {},
  buildSteps: (input) => chipsSteps(input),
  Renderer: ChipsRenderer,
};
