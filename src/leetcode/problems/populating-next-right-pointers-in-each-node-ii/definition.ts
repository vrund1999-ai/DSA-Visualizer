import type { LeetCodeProblem } from "../../types";
import type { NextPointerIIData } from "./algorithm";
import { nextPointerIISteps } from "./algorithm";
import { CODE } from "./code";
import { NextPointerIIRenderer } from "./NextPointerIIRenderer";

export const populatingNextRightPointersIIProblem: LeetCodeProblem<
  (number | null)[],
  NextPointerIIData,
  Record<string, never>
> = {
  id: "populating-next-right-pointers-in-each-node-ii",
  number: 117,
  title: "Populating Next Right Pointers in Each Node II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
  summary: "Thread each level with a dummy tail — works for any (non-perfect) tree.",
  prompt:
    "Given an arbitrary binary tree, populate each node's next pointer to its right " +
    "neighbour on the same level (or null). Use O(1) extra space. " +
    "(Input shown as a heap array; nulls are absent nodes.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Linked List", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Linked List", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 48.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5, null, 7],
  defaultOptions: {},
  buildSteps: (input) => nextPointerIISteps(input),
  Renderer: NextPointerIIRenderer,
};
