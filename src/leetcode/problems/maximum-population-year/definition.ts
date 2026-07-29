import type { LeetCodeProblem } from "../../types";
import type { PopulationData } from "./algorithm";
import { populationSteps } from "./algorithm";
import { CODE } from "./code";
import { PopulationRenderer } from "./PopulationRenderer";

export const maximumPopulationYearProblem: LeetCodeProblem<number[][], PopulationData, Record<string, never>> = {
  id: "maximum-population-year",
  number: 1854,
  title: "Maximum Population Year",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/maximum-population-year/",
  summary: "Difference array over years (+1 birth, −1 death); prefix-sum and take the earliest peak.",
  prompt:
    "Each log is [birth, death); a person is alive from birth up to (not including) death. Return the " +
    "earliest year with the maximum population.",
  topics: ["Array", "Counting", "Prefix Sum"],
  tags: ["Array", "Counting", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1993, 1999],
    [2000, 2010],
    [1950, 1961],
    [1960, 1971],
  ],
  defaultOptions: {},
  buildSteps: (input) => populationSteps(input),
  Renderer: PopulationRenderer,
};
