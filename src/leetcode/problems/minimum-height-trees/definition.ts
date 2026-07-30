import type { LeetCodeProblem } from "../../types";
import type { MHTData } from "./algorithm";
import { mhtSteps } from "./algorithm";
import { CODE } from "./code";
import { MHTRenderer } from "./MHTRenderer";

interface MHTInput {
  n: number;
  edges: number[][];
}

export const minHeightTreesProblem: LeetCodeProblem<MHTInput, MHTData, Record<string, never>> = {
  id: "minimum-height-trees",
  number: 310,
  title: "Minimum Height Trees",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-height-trees/",
  summary: "Peel all leaves layer by layer; the 1–2 nodes that survive are the tree's centroids (best roots).",
  prompt:
    "For a tree of n nodes, a root's height is its longest downward path. Return all roots that minimize the " +
    "tree height (the minimum-height-tree roots).",
  topics: ["Graph", "BFS", "Topological Sort"],
  tags: ["Graph", "Topological Sort"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 6, edges: [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]] }),
  defaultOptions: {},
  buildSteps: (input) => mhtSteps(input.n, input.edges),
  Renderer: MHTRenderer,
};
