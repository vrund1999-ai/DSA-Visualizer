import type { LeetCodeProblem } from "../../types";
import type { DivThreeData } from "./algorithm";
import { divThreeSteps } from "./algorithm";
import { CODE } from "./code";
import { DivThreeRenderer } from "./DivThreeRenderer";

export const greatestSumDivThreeProblem: LeetCodeProblem<number[], DivThreeData, Record<string, never>> = {
  id: "greatest-sum-divisible-by-three",
  number: 1262,
  title: "Greatest Sum Divisible by Three",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/greatest-sum-divisible-by-three/",
  summary: "Track the best subset sum for each remainder mod 3; each number shifts remainder r to (r+x) mod 3.",
  prompt: "Given an integer array, return the maximum possible sum of a subset whose total is divisible by three.",
  topics: ["Array", "Dynamic Programming", "Greedy"],
  tags: ["Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [3, 6, 5, 1, 8],
  defaultOptions: {},
  buildSteps: (input) => divThreeSteps(input),
  Renderer: DivThreeRenderer,
};
