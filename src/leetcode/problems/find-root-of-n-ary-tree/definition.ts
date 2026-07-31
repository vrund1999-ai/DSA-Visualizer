import type { LeetCodeProblem } from "../../types";
import type { FindRootData, NaryNode } from "./algorithm";
import { findRootSteps } from "./algorithm";
import { CODE } from "./code";
import { FindRootRenderer } from "./FindRootRenderer";

interface FindRootInput {
  nodes: NaryNode[];
}

export const findRootNaryProblem: LeetCodeProblem<FindRootInput, FindRootData, Record<string, never>> = {
  id: "find-root-of-n-ary-tree",
  number: 1506,
  title: "Find Root of N-Ary Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-root-of-n-ary-tree/",
  summary: "XOR all node and child values: each non-root cancels (appears twice), leaving only the root's value.",
  prompt:
    "Given all the nodes of an N-ary tree in arbitrary order, identify and return the root node using O(1) " +
    "extra space.",
  topics: ["Hash Table", "Bit Manipulation", "Tree", "Depth-First Search"],
  tags: ["Bit Manipulation", "Tree"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    nodes: [
      { val: 3, children: [5, 6] },
      { val: 2, children: [] },
      { val: 1, children: [3, 2, 4] },
      { val: 5, children: [] },
      { val: 4, children: [] },
      { val: 6, children: [] },
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => findRootSteps(input.nodes),
  Renderer: FindRootRenderer,
};
