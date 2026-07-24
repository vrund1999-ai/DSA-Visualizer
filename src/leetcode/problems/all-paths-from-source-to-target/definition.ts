import type { LeetCodeProblem } from "../../types";
import type { AllPathsData } from "./algorithm";
import { allPathsSteps } from "./algorithm";
import { CODE } from "./code";
import { AllPathsRenderer } from "./AllPathsRenderer";

export const allPathsProblem: LeetCodeProblem<
  number[][],
  AllPathsData,
  Record<string, never>
> = {
  id: "all-paths-from-source-to-target",
  number: 797,
  title: "All Paths From Source to Target",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/all-paths-from-source-to-target/",
  summary: "Enumerate every 0→n-1 path in a DAG (DFS backtracking).",
  prompt:
    "Given a directed acyclic graph as an adjacency list `graph`, return all " +
    "paths from node 0 to node n-1 in any order. graph[i] lists the nodes i " +
    "points to.",
  topics: ["Backtracking", "Depth-First Search", "Graph Theory"],
  tags: ["Backtracking", "Depth-First Search", "Graph Theory"],
  companies: ["Bloomberg"],
  frequency: 60.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(2ⁿ·n)", timeWorst: "O(2ⁿ·n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [[1, 2], [3], [3], []],
  defaultOptions: {},
  buildSteps: (input) => allPathsSteps(input),
  Renderer: AllPathsRenderer,
};
