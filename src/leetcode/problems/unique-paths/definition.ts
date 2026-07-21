import type { LeetCodeProblem } from "../../types";
import type { UniquePathsData, UniquePathsInput } from "./algorithm";
import { uniquePathsSteps } from "./algorithm";
import { CODE } from "./code";
import { UniquePathsRenderer } from "./UniquePathsRenderer";

export const uniquePathsProblem: LeetCodeProblem<
  UniquePathsInput,
  UniquePathsData,
  Record<string, never>
> = {
  id: "unique-paths",
  number: 62,
  title: "Unique Paths",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/unique-paths/",
  summary: "Count grid paths moving only right or down (DP).",
  prompt:
    "A robot starts at the top-left of an m×n grid and can only move right or " +
    "down. Return how many unique paths lead to the bottom-right corner.",
  topics: ["Math", "Dynamic Programming", "Combinatorics"],
  tags: ["Math", "Dynamic Programming", "Combinatorics"],
  companies: ["Bloomberg"],
  frequency: 54.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ m: 3, n: 4 }),
  defaultOptions: {},
  buildSteps: (input) => uniquePathsSteps(input),
  Renderer: UniquePathsRenderer,
};
