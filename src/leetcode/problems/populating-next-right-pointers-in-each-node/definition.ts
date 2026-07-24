import type { LeetCodeProblem } from "../../types";
import type { NextPointerData } from "./algorithm";
import { nextPointerSteps } from "./algorithm";
import { CODE } from "./code";
import { NextPointerRenderer } from "./NextPointerRenderer";

export const populatingNextRightPointersProblem: LeetCodeProblem<
  (number | null)[],
  NextPointerData,
  Record<string, never>
> = {
  id: "populating-next-right-pointers-in-each-node",
  number: 116,
  title: "Populating Next Right Pointers in Each Node",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
  summary: "Wire each node's next pointer using the level above — O(1) extra space.",
  prompt:
    "Given a perfect binary tree, populate each node's next pointer to point to its " +
    "right neighbour on the same level (or null if none). " +
    "(Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Linked List", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Linked List", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 47.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5, 6, 7],
  defaultOptions: {},
  buildSteps: (input) => nextPointerSteps(input),
  Renderer: NextPointerRenderer,
};
