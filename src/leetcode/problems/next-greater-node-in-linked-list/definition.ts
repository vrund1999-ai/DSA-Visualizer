import type { LeetCodeProblem } from "../../types";
import type { NextGreaterData } from "./algorithm";
import { nextGreaterSteps } from "./algorithm";
import { CODE } from "./code";
import { NextGreaterRenderer } from "./NextGreaterRenderer";

export const nextGreaterNodeProblem: LeetCodeProblem<number[], NextGreaterData, Record<string, never>> = {
  id: "next-greater-node-in-linked-list",
  number: 1019,
  title: "Next Greater Node In Linked List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/next-greater-node-in-linked-list/",
  summary: "A decreasing monotonic stack of indices resolves each node's next strictly greater value.",
  prompt:
    "For each node in a linked list, find the value of the first node to its right that is strictly " +
    "greater (0 if none). Return these values in order.",
  topics: ["Array", "Linked List", "Stack", "Monotonic Stack"],
  tags: ["Linked List", "Stack", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [2, 7, 4, 3, 5],
  defaultOptions: {},
  buildSteps: (input) => nextGreaterSteps(input),
  Renderer: NextGreaterRenderer,
};
