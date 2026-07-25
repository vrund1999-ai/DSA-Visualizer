import type { LeetCodeProblem } from "../../types";
import type { PathExistsData } from "./algorithm";
import { pathExistsSteps } from "./algorithm";
import { CODE } from "./code";
import { PathExistsRenderer } from "./PathExistsRenderer";

interface PathExistsInput {
  n: number;
  edges: [number, number][];
  source: number;
  dest: number;
}

export const findPathExistsProblem: LeetCodeProblem<PathExistsInput, PathExistsData, Record<string, never>> = {
  id: "find-if-path-exists-in-graph",
  number: 1971,
  title: "Find if Path Exists in Graph",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-if-path-exists-in-graph/",
  summary: "Union every edge; source and dest connect iff they share a root.",
  prompt:
    "Given an undirected graph of n vertices and an edge list, determine whether a path " +
    "exists between the source and destination vertices.",
  topics: ["Depth-First Search", "Breadth-First Search", "Union Find", "Graph"],
  tags: ["Union Find", "Graph", "Breadth-First Search"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((V+E)·α)", timeWorst: "O(V+E)", space: "O(V)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 6, edges: [[0, 1], [1, 2], [2, 5], [3, 4]], source: 0, dest: 5 }),
  defaultOptions: {},
  buildSteps: (input) => pathExistsSteps(input.n, input.edges, input.source, input.dest),
  Renderer: PathExistsRenderer,
};
