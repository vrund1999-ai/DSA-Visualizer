import type { LeetCodeProblem } from "../../types";
import type { DistanceKData } from "./algorithm";
import { distanceKSteps } from "./algorithm";
import { CODE } from "./code";
import { DistanceKRenderer } from "./DistanceKRenderer";

interface DistanceKInput {
  heap: (number | null)[];
  target: number;
  k: number;
}

export const allNodesDistanceKProblem: LeetCodeProblem<DistanceKInput, DistanceKData, Record<string, never>> = {
  id: "all-nodes-distance-k-in-binary-tree",
  number: 863,
  title: "All Nodes Distance K in Binary Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
  summary: "Add parent links to make the tree undirected, then BFS k rings out from the target.",
  prompt:
    "Given the root of a binary tree, a target node, and an integer k, return the values of all " +
    "nodes at distance k from the target (in any order).",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], target: 5, k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => distanceKSteps(input.heap, input.target, input.k),
  Renderer: DistanceKRenderer,
};
