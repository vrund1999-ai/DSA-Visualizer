import type { LeetCodeProblem } from "../../types";
import type { NetworkData } from "./algorithm";
import { networkSteps } from "./algorithm";
import { CODE } from "./code";
import { NetworkRenderer } from "./NetworkRenderer";

interface NetworkInput {
  n: number;
  connections: number[][];
}

export const makeNetworkConnectedProblem: LeetCodeProblem<NetworkInput, NetworkData, Record<string, never>> = {
  id: "number-of-operations-to-make-network-connected",
  number: 1319,
  title: "Number of Operations to Make Network Connected",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
  summary: "With ≥ n−1 cables, redundant ones reconnect separate components; the answer is (components − 1).",
  prompt:
    "n computers are linked by cables (edges). You may unplug any cable and reconnect it elsewhere. Return " +
    "the minimum moves to connect all computers, or -1 if impossible.",
  topics: ["Graph", "Union Find", "DFS", "BFS"],
  tags: ["Union Find", "Graph"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(E α(n))", timeWorst: "O(E α(n))", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 6, connections: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]] }),
  defaultOptions: {},
  buildSteps: (input) => networkSteps(input.n, input.connections),
  Renderer: NetworkRenderer,
};
