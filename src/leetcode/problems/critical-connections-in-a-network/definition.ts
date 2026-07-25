import type { LeetCodeProblem } from "../../types";
import type { CriticalData } from "./algorithm";
import { criticalSteps } from "./algorithm";
import { CODE } from "./code";
import { CriticalRenderer } from "./CriticalRenderer";

interface CriticalInput {
  n: number;
  connections: number[][];
}

export const criticalConnectionsProblem: LeetCodeProblem<CriticalInput, CriticalData, Record<string, never>> = {
  id: "critical-connections-in-a-network",
  number: 1192,
  title: "Critical Connections in a Network",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/critical-connections-in-a-network/",
  summary: "Tarjan DFS with discovery/low-link values; a tree edge is a bridge when low[v] > disc[u].",
  prompt:
    "Given n servers connected by undirected edges, return all critical connections — edges whose " +
    "removal disconnects some servers (the graph's bridges).",
  topics: ["Depth-First Search", "Graph", "Biconnected Component"],
  tags: ["Depth-First Search", "Graph", "Biconnected Component"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(V + E)", timeWorst: "O(V + E)", space: "O(V + E)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 6, connections: [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4], [4, 5], [5, 3]] }),
  defaultOptions: {},
  buildSteps: (input) => criticalSteps(input.n, input.connections),
  Renderer: CriticalRenderer,
};
