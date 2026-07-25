import type { LeetCodeProblem } from "../../types";
import type { CandiesData } from "./algorithm";
import { candiesSteps } from "./algorithm";
import { CODE } from "./code";
import { CandiesRenderer } from "./CandiesRenderer";

interface CandiesInput {
  candies: number[];
  extra: number;
}

export const kidsWithGreatestCandiesProblem: LeetCodeProblem<CandiesInput, CandiesData, Record<string, never>> = {
  id: "kids-with-the-greatest-number-of-candies",
  number: 1431,
  title: "Kids With the Greatest Number of Candies",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
  summary: "Find the group maximum once; each kid qualifies if their count plus the extras reaches it.",
  prompt:
    "Given each kid's candy count and a number of extra candies, return for each kid whether " +
    "giving them all the extras makes them have the greatest number of candies (ties allowed).",
  topics: ["Array"],
  tags: ["Array"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ candies: [2, 3, 5, 1, 3], extra: 3 }),
  defaultOptions: {},
  buildSteps: (input) => candiesSteps(input.candies, input.extra),
  Renderer: CandiesRenderer,
};
