import type { LeetCodeProblem } from "../../types";
import type { SightseeingData } from "./algorithm";
import { sightseeingSteps } from "./algorithm";
import { CODE } from "./code";
import { SightseeingRenderer } from "./SightseeingRenderer";

export const bestSightseeingPairProblem: LeetCodeProblem<number[], SightseeingData, Record<string, never>> = {
  id: "best-sightseeing-pair",
  number: 1014,
  title: "Best Sightseeing Pair",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/best-sightseeing-pair/",
  summary: "Split the score into (values[i]+i)+(values[j]-j); keep the best left term as you scan.",
  prompt:
    "Given values where the score of a pair (i < j) is values[i] + values[j] + i − j, return the " +
    "maximum score over all pairs.",
  topics: ["Array", "Dynamic Programming"],
  tags: ["Array", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [8, 1, 5, 2, 6],
  defaultOptions: {},
  buildSteps: (input) => sightseeingSteps(input),
  Renderer: SightseeingRenderer,
};
