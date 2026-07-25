import type { LeetCodeProblem } from "../../types";
import type { RobberIVData } from "./algorithm";
import { robberIVSteps } from "./algorithm";
import { CODE } from "./code";
import { RobberIVRenderer } from "./RobberIVRenderer";

interface RobberIVInput {
  nums: number[];
  k: number;
}

export const houseRobberIVProblem: LeetCodeProblem<RobberIVInput, RobberIVData, Record<string, never>> = {
  id: "house-robber-iv",
  number: 2560,
  title: "House Robber IV",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/house-robber-iv/",
  summary: "Binary-search the capability; greedily test if k non-adjacent houses fit under each cap.",
  prompt:
    "A robber steals from at least k houses, never two adjacent. The capability is the maximum " +
    "amount taken from a single house. Return the minimum possible capability.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log(max))", timeWorst: "O(n log(max))", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [2, 3, 5, 9], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => robberIVSteps(input.nums, input.k),
  Renderer: RobberIVRenderer,
};
