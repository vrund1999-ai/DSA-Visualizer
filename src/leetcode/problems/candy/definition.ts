import type { LeetCodeProblem } from "../../types";
import type { CandyData } from "./algorithm";
import { candySteps } from "./algorithm";
import { CODE } from "./code";
import { CandyRenderer } from "./CandyRenderer";

export const candyProblem: LeetCodeProblem<
  number[],
  CandyData,
  Record<string, never>
> = {
  id: "candy",
  number: 135,
  title: "Candy",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/candy/",
  summary: "Fewest candies so higher-rated kids beat neighbours (two passes).",
  prompt:
    "Each child has a rating and needs at least one candy; a child with a higher " +
    "rating than an adjacent child must get more candies. Return the minimum " +
    "total candies.",
  topics: ["Array", "Greedy"],
  tags: ["Array", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 54.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 0, 2, 4, 3],
  defaultOptions: {},
  buildSteps: (input) => candySteps(input),
  Renderer: CandyRenderer,
};
