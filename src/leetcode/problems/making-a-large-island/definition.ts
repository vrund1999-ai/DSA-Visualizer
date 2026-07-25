import type { LeetCodeProblem } from "../../types";
import type { LargeIslandData } from "./algorithm";
import { largeIslandSteps } from "./algorithm";
import { CODE } from "./code";
import { LargeIslandRenderer } from "./LargeIslandRenderer";

export const makingALargeIslandProblem: LeetCodeProblem<number[][], LargeIslandData, Record<string, never>> = {
  id: "making-a-large-island",
  number: 827,
  title: "Making A Large Island",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/making-a-large-island/",
  summary: "Label islands with sizes, then for each 0 sum its distinct neighbor islands plus one.",
  prompt:
    "Given a binary grid, you may change at most one 0 to a 1. Return the size of the largest " +
    "island (4-directionally connected 1s) you can obtain.",
  topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"],
  tags: ["Array", "Depth-First Search", "Union Find", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 1, 0, 0, 0],
    [1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => largeIslandSteps(input),
  Renderer: LargeIslandRenderer,
};
