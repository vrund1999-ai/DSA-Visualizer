import type { LeetCodeProblem } from "../../types";
import type { SwapNodesData } from "./algorithm";
import { swapNodesSteps } from "./algorithm";
import { CODE } from "./code";
import { SwapNodesRenderer } from "./SwapNodesRenderer";

interface SwapNodesInput {
  values: number[];
  k: number;
}

export const swappingNodesProblem: LeetCodeProblem<SwapNodesInput, SwapNodesData, Record<string, never>> = {
  id: "swapping-nodes-in-a-linked-list",
  number: 1721,
  title: "Swapping Nodes in a Linked List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/",
  summary: "A fast pointer marks the kth from start; moving a second pointer in step finds the kth from end to swap.",
  prompt: "Given a linked list and integer k, swap the values of the kth node from the beginning and the kth node from the end.",
  topics: ["Linked List", "Two Pointers"],
  tags: ["Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [1, 2, 3, 4, 5], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => swapNodesSteps(input.values, input.k),
  Renderer: SwapNodesRenderer,
};
