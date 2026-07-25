import type { LeetCodeProblem } from "../../types";
import type { StonesData } from "./algorithm";
import { stonesSteps } from "./algorithm";
import { CODE } from "./code";
import { StonesRenderer } from "./StonesRenderer";

export const mostStonesRemovedProblem: LeetCodeProblem<number[][], StonesData, Record<string, never>> = {
  id: "most-stones-removed-with-same-row-or-column",
  number: 947,
  title: "Most Stones Removed with Same Row or Column",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",
  summary: "Union stones sharing a row or column; removable count = stones − connected components.",
  prompt:
    "Stones sit on a 2D plane. A stone can be removed if it shares its row or column with another " +
    "remaining stone. Return the maximum number of stones that can be removed.",
  topics: ["Hash Table", "Depth-First Search", "Union Find", "Graph"],
  tags: ["Union Find", "Graph", "Depth-First Search"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n² α)", timeWorst: "O(n² α)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
    [2, 2],
  ],
  defaultOptions: {},
  buildSteps: (input) => stonesSteps(input),
  Renderer: StonesRenderer,
};
