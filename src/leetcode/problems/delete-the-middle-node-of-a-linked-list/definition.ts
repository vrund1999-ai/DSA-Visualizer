import type { LeetCodeProblem } from "../../types";
import type { DeleteMiddleData } from "./algorithm";
import { deleteMiddleSteps } from "./algorithm";
import { CODE } from "./code";
import { DeleteMiddleRenderer } from "./DeleteMiddleRenderer";

export const deleteMiddleNodeProblem: LeetCodeProblem<number[], DeleteMiddleData, Record<string, never>> = {
  id: "delete-the-middle-node-of-a-linked-list",
  number: 2095,
  title: "Delete the Middle Node of a Linked List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
  summary: "Slow/fast pointers locate the middle node in one pass; unlink it via the node before slow.",
  prompt:
    "Delete the middle node (index ⌊n/2⌋, 0-indexed) of a linked list and return the head of the " +
    "modified list.",
  topics: ["Linked List", "Two Pointers"],
  tags: ["Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 3, 4, 7, 1, 2, 6],
  defaultOptions: {},
  buildSteps: (input) => deleteMiddleSteps(input),
  Renderer: DeleteMiddleRenderer,
};
