import type { LeetCodeProblem } from "../../types";
import type { BipartiteData } from "./algorithm";
import { bipartiteSteps } from "./algorithm";
import { CODE } from "./code";
import { BipartiteRenderer } from "./BipartiteRenderer";

export const isGraphBipartiteProblem: LeetCodeProblem<number[][], BipartiteData, Record<string, never>> = {
  id: "is-graph-bipartite",
  number: 785,
  title: "Is Graph Bipartite?",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/is-graph-bipartite/",
  summary: "BFS 2-coloring: color each node opposite its discoverer; a same-color edge means not bipartite.",
  prompt:
    "Given an undirected graph as an adjacency list, determine whether its nodes can be split into two " +
    "sets so that every edge connects a node in one set to a node in the other.",
  topics: ["Graph", "BFS", "DFS", "Union Find"],
  tags: ["Graph", "BFS"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(V + E)", timeWorst: "O(V + E)", space: "O(V)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ],
  defaultOptions: {},
  buildSteps: (input) => bipartiteSteps(input),
  Renderer: BipartiteRenderer,
};
