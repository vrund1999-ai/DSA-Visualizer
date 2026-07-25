import type { LeetCodeProblem } from "../../types";
import type { SafeStatesData } from "./algorithm";
import { safeStatesSteps } from "./algorithm";
import { CODE } from "./code";
import { SafeStatesRenderer } from "./SafeStatesRenderer";

export const findEventualSafeStatesProblem: LeetCodeProblem<number[][], SafeStatesData, Record<string, never>> = {
  id: "find-eventual-safe-states",
  number: 802,
  title: "Find Eventual Safe States",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-eventual-safe-states/",
  summary: "3-color DFS marks nodes whose every path avoids a cycle as safe.",
  prompt:
    "A node is safe if every path starting from it leads to a terminal node (no path " +
    "enters a cycle). Given a directed graph as an adjacency list, return all safe nodes " +
    "in ascending order.",
  topics: ["Depth-First Search", "Breadth-First Search", "Graph", "Topological Sort"],
  tags: ["Depth-First Search", "Graph", "Topological Sort"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(V + E)", timeWorst: "O(V + E)", space: "O(V)" },
  inputSchema: [],
  makeDefaultInput: () => [[1, 2], [2, 3], [5], [0], [5], [], []],
  defaultOptions: {},
  buildSteps: (input) => safeStatesSteps(input),
  Renderer: SafeStatesRenderer,
};
