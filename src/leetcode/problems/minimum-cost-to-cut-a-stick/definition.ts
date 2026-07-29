import type { LeetCodeProblem } from "../../types";
import type { CutStickData } from "./algorithm";
import { cutStickSteps } from "./algorithm";
import { CODE } from "./code";
import { CutStickRenderer } from "./CutStickRenderer";

interface CutStickInput {
  n: number;
  cuts: number[];
}

export const minCostCutStickProblem: LeetCodeProblem<CutStickInput, CutStickData, Record<string, never>> = {
  id: "minimum-cost-to-cut-a-stick",
  number: 1547,
  title: "Minimum Cost to Cut a Stick",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
  summary: "Interval DP over sorted cut positions: cutting a segment costs its length, plus the sub-intervals.",
  prompt:
    "A stick of length n has marked positions to cut. Each cut costs the length of the segment being " +
    "cut. Return the minimum total cost to make all cuts (order is up to you).",
  topics: ["Array", "Dynamic Programming", "Sorting"],
  tags: ["Array", "Dynamic Programming", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m³)", timeWorst: "O(m³)", space: "O(m²)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 7, cuts: [1, 3, 4, 5] }),
  defaultOptions: {},
  buildSteps: (input) => cutStickSteps(input.n, input.cuts),
  Renderer: CutStickRenderer,
};
