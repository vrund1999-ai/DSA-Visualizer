import type { LeetCodeProblem } from "../../types";
import type { CloneGraphData } from "./algorithm";
import { cloneGraphSteps } from "./algorithm";
import { CODE } from "./code";
import { CloneGraphRenderer } from "./CloneGraphRenderer";

export const cloneGraphProblem: LeetCodeProblem<number[][], CloneGraphData, Record<string, never>> = {
  id: "clone-graph",
  number: 133,
  title: "Clone Graph",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/clone-graph/",
  summary: "DFS with an original→copy map; register before recursing to handle cycles.",
  prompt:
    "Return a deep copy of a connected undirected graph. Each node has a value and a list " +
    "of neighbours. (Input shown as a 1-indexed adjacency list.)",
  topics: ["Hash Table", "Depth-First Search", "Breadth-First Search", "Graph"],
  tags: ["Hash Table", "Depth-First Search", "Graph"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(V + E)", timeWorst: "O(V + E)", space: "O(V)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ],
  defaultOptions: {},
  buildSteps: (input) => cloneGraphSteps(input),
  Renderer: CloneGraphRenderer,
};
