import type { LeetCodeProblem } from "../../types";
import type { DeleteNodesData } from "./algorithm";
import { deleteNodesSteps } from "./algorithm";
import { CODE } from "./code";
import { DeleteNodesRenderer } from "./DeleteNodesRenderer";

interface DeleteNodesInput {
  nums: number[];
  head: number[];
}

export const deleteNodesFromLinkedListProblem: LeetCodeProblem<DeleteNodesInput, DeleteNodesData, Record<string, never>> = {
  id: "delete-nodes-from-linked-list-present-in-array",
  number: 3217,
  title: "Delete Nodes From Linked List Present in Array",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/",
  summary: "Put the array in a set; walk the list with a prev pointer, unlinking nodes whose value is present.",
  prompt:
    "Given an array nums and the head of a linked list, remove every node whose value appears in nums " +
    "and return the modified list's head.",
  topics: ["Array", "Hash Table", "Linked List"],
  tags: ["Array", "Hash Table", "Linked List"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + m)", timeWorst: "O(n + m)", space: "O(m)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums: [1, 2, 3], head: [1, 2, 3, 4, 5] }),
  defaultOptions: {},
  buildSteps: (input) => deleteNodesSteps(input.nums, input.head),
  Renderer: DeleteNodesRenderer,
};
