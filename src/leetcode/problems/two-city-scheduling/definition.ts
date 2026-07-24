import type { LeetCodeProblem } from "../../types";
import type { TwoCityData } from "./algorithm";
import { twoCitySteps } from "./algorithm";
import { CODE } from "./code";
import { TwoCityRenderer } from "./TwoCityRenderer";

export const twoCitySchedulingProblem: LeetCodeProblem<
  [number, number][],
  TwoCityData,
  Record<string, never>
> = {
  id: "two-city-scheduling",
  number: 1029,
  title: "Two City Scheduling",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/two-city-scheduling/",
  summary: "Send half to each city for minimum cost (greedy sort).",
  prompt:
    "2n people each have a cost to fly to city A or city B. Send exactly n to " +
    "each city while minimising the total cost.",
  topics: ["Array", "Greedy", "Sorting"],
  tags: ["Array", "Greedy", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 58.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n)", timeWorst: "O(n log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ],
  defaultOptions: {},
  buildSteps: (input) => twoCitySteps(input),
  Renderer: TwoCityRenderer,
};
