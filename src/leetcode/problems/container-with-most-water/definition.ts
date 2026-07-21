import type { LeetCodeProblem } from "../../types";
import type { ContainerData } from "./algorithm";
import { containerSteps } from "./algorithm";
import { CODE } from "./code";
import { ContainerRenderer } from "./ContainerRenderer";

export const containerWithMostWaterProblem: LeetCodeProblem<
  number[],
  ContainerData,
  Record<string, never>
> = {
  id: "container-with-most-water",
  number: 11,
  title: "Container With Most Water",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/container-with-most-water/",
  summary: "Two walls holding the most water, via two pointers.",
  prompt:
    "Given an array `height` of non-negative integers, each representing a " +
    "vertical line, find two lines that together with the x-axis form a " +
    "container holding the most water. Return that maximum area.",
  topics: ["Array", "Two Pointers", "Greedy"],
  tags: ["Array", "Two Pointers", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 75.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 8, 6, 2, 5, 4, 8, 3, 7],
  defaultOptions: {},
  buildSteps: (input) => containerSteps(input),
  Renderer: ContainerRenderer,
};
