import type { LeetCodeProblem } from "../../types";
import type { ReverseKData } from "./algorithm";
import { reverseKSteps } from "./algorithm";
import { CODE } from "./code";
import { ReverseKRenderer } from "./ReverseKRenderer";

interface ReverseKInput {
  values: number[];
  k: number;
}

export const reverseNodesKGroupProblem: LeetCodeProblem<ReverseKInput, ReverseKData, Record<string, never>> = {
  id: "reverse-nodes-in-k-group",
  number: 25,
  title: "Reverse Nodes in k-Group",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
  summary: "Reverse the linked list in consecutive groups of k; short tail stays put.",
  prompt:
    "Given the head of a linked list, reverse the nodes k at a time and return the " +
    "modified list. Nodes left over at the end (fewer than k) remain in their original " +
    "order.",
  topics: ["Linked List", "Recursion"],
  tags: ["Linked List", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 47.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n/k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [1, 2, 3, 4, 5], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => reverseKSteps(input.values, input.k),
  Renderer: ReverseKRenderer,
};
