import type { LeetCodeProblem } from "../../types";
import type { ProvincesData } from "./algorithm";
import { provincesSteps } from "./algorithm";
import { CODE } from "./code";
import { ProvincesRenderer } from "./ProvincesRenderer";

export const numberOfProvincesProblem: LeetCodeProblem<
  number[][],
  ProvincesData,
  Record<string, never>
> = {
  id: "number-of-provinces",
  number: 547,
  title: "Number of Provinces",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-provinces/",
  summary: "Count connected city groups with Union-Find.",
  prompt:
    "Given an n×n matrix `isConnected` where isConnected[i][j] = 1 means cities i " +
    "and j are directly connected, return the number of provinces (connected " +
    "groups of cities).",
  topics: ["Depth-First Search", "Union-Find", "Graph Theory"],
  tags: ["Depth-First Search", "Union-Find", "Graph Theory"],
  companies: ["Bloomberg"],
  frequency: 54.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => provincesSteps(input),
  Renderer: ProvincesRenderer,
};
