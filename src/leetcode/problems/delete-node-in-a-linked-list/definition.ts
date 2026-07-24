import type { LeetCodeProblem } from "../../types";
import type { DeleteNodeData } from "./algorithm";
import { deleteNodeSteps } from "./algorithm";
import { CODE } from "./code";
import { DeleteNodeRenderer } from "./DeleteNodeRenderer";

interface DeleteNodeInput {
  values: number[];
  target: number;
}

export const deleteNodeLinkedListProblem: LeetCodeProblem<DeleteNodeInput, DeleteNodeData, Record<string, never>> = {
  id: "delete-node-in-a-linked-list",
  number: 237,
  title: "Delete Node in a Linked List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
  summary: "Overwrite the node with its successor's value, then unlink the successor.",
  prompt:
    "You are given access only to the node to be deleted (not the head), guaranteed not " +
    "to be the tail. Delete it so the list's values read as if the node were removed.",
  topics: ["Linked List"],
  tags: ["Linked List"],
  companies: ["Bloomberg"],
  frequency: 46.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [4, 5, 1, 9], target: 1 }),
  defaultOptions: {},
  buildSteps: (input) => deleteNodeSteps(input.values, input.target),
  Renderer: DeleteNodeRenderer,
};
