import type { LeetCodeProblem } from "../../types";
import type { TwoHousesData } from "./algorithm";
import { twoHousesSteps } from "./algorithm";
import { CODE } from "./code";
import { TwoHousesRenderer } from "./TwoHousesRenderer";

interface TwoHousesInput {
  colors: number[];
}

export const twoFurthestHousesProblem: LeetCodeProblem<TwoHousesInput, TwoHousesData, Record<string, never>> = {
  id: "two-furthest-houses-with-different-colors",
  number: 2078,
  title: "Two Furthest Houses With Different Colors",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/two-furthest-houses-with-different-colors/",
  summary: "An optimal differing pair always includes an endpoint, so compare the first and last houses against the others.",
  prompt:
    "Given an array of house colors, return the maximum distance |i − j| between two houses with different " +
    "colors.",
  topics: ["Array", "Greedy"],
  tags: ["Greedy", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ colors: [1, 1, 1, 6, 1, 1, 1] }),
  defaultOptions: {},
  buildSteps: (input) => twoHousesSteps(input.colors),
  Renderer: TwoHousesRenderer,
};
