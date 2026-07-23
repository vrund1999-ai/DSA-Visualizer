import type { LeetCodeProblem } from "../../types";
import type { RemoveNthData, RemoveNthInput } from "./algorithm";
import { removeNthSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveNthRenderer } from "./RemoveNthRenderer";

export const removeNthNodeProblem: LeetCodeProblem<
  RemoveNthInput,
  RemoveNthData,
  Record<string, never>
> = {
  id: "remove-nth-node-from-end-of-list",
  number: 19,
  title: "Remove Nth Node From End of List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
  summary: "Delete the nth-from-last node in one pass (two pointers).",
  prompt:
    "Given the head of a linked list, remove the nth node from the end and return " +
    "the head. Do it in one pass.",
  topics: ["Linked List", "Two Pointers"],
  tags: ["Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 50.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [1, 2, 3, 4, 5], n: 2 }),
  defaultOptions: {},
  buildSteps: (input) => removeNthSteps(input),
  Renderer: RemoveNthRenderer,
};
