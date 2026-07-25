import type { LeetCodeProblem } from "../../types";
import type { RedundantData } from "./algorithm";
import { redundantSteps } from "./algorithm";
import { CODE } from "./code";
import { RedundantRenderer } from "./RedundantRenderer";

export const redundantConnectionProblem: LeetCodeProblem<[number, number][], RedundantData, Record<string, never>> = {
  id: "redundant-connection",
  number: 684,
  title: "Redundant Connection",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/redundant-connection/",
  summary: "Union-Find; the edge that joins two already-connected nodes is redundant.",
  prompt:
    "A tree of n nodes has one extra edge added, creating exactly one cycle. Return the " +
    "edge that can be removed so the graph is a tree again (the last such edge in input " +
    "order).",
  topics: ["Depth-First Search", "Breadth-First Search", "Union Find", "Graph"],
  tags: ["Union Find", "Graph"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·α)", timeWorst: "O(n·α)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 2],
    [1, 3],
    [2, 3],
  ],
  defaultOptions: {},
  buildSteps: (input) => redundantSteps(input),
  Renderer: RedundantRenderer,
};
