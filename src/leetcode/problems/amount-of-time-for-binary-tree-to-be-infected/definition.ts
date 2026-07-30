import type { LeetCodeProblem } from "../../types";
import type { InfectData } from "./algorithm";
import { infectSteps } from "./algorithm";
import { CODE } from "./code";
import { InfectRenderer } from "./InfectRenderer";

interface InfectInput {
  heap: (number | null)[];
  start: number;
}

export const treeInfectionTimeProblem: LeetCodeProblem<InfectInput, InfectData, Record<string, never>> = {
  id: "amount-of-time-for-binary-tree-to-be-infected",
  number: 2385,
  title: "Amount of Time for Binary Tree to Be Infected",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/",
  summary: "Treat the tree as an undirected graph and BFS from the start; the answer is the farthest distance.",
  prompt:
    "Starting from a given node, infection spreads to all adjacent nodes each minute. Return the number " +
    "of minutes until every node in the binary tree is infected.",
  topics: ["Tree", "BFS", "DFS", "Hash Table"],
  tags: ["Tree", "BFS"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [1, 5, 3, 7, 4, 10, 6], start: 6 }),
  defaultOptions: {},
  buildSteps: (input) => infectSteps(input.heap, input.start),
  Renderer: InfectRenderer,
};
