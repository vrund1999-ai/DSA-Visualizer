import type { LeetCodeProblem } from "../../types";
import type { CandiesData } from "./algorithm";
import { candiesSteps } from "./algorithm";
import { CODE } from "./code";
import { CandiesRenderer } from "./CandiesRenderer";

export const distributeCandiesProblem: LeetCodeProblem<number[], CandiesData, Record<string, never>> = {
  id: "distribute-candies",
  number: 575,
  title: "Distribute Candies",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/distribute-candies/",
  summary: "She eats n/2 candies; the most flavors is min(distinct types, n/2).",
  prompt:
    "Given an even-length array of candy types, Alice may eat n/2 candies. Return the maximum number " +
    "of distinct types she can eat.",
  topics: ["Array", "Hash Table"],
  tags: ["Array", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 1, 2, 2, 3, 3],
  defaultOptions: {},
  buildSteps: (input) => candiesSteps(input),
  Renderer: CandiesRenderer,
};
