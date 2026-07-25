import type { LeetCodeProblem } from "../../types";
import type { DeleteBSTData } from "./algorithm";
import { deleteBSTSteps } from "./algorithm";
import { CODE } from "./code";
import { DeleteBSTRenderer } from "./DeleteBSTRenderer";

interface DeleteBSTInput {
  heap: (number | null)[];
  key: number;
}

export const deleteNodeBSTProblem: LeetCodeProblem<DeleteBSTInput, DeleteBSTData, Record<string, never>> = {
  id: "delete-node-in-a-bst",
  number: 450,
  title: "Delete Node in a BST",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/delete-node-in-a-bst/",
  summary: "Search by BST order; a two-child node copies its in-order successor.",
  prompt:
    "Given the root of a binary search tree and a key, delete the node with that key and " +
    "return the (possibly new) root, keeping the BST property. (Input shown as a heap array.)",
  topics: ["Tree", "Binary Search Tree", "Binary Tree"],
  tags: ["Tree", "Binary Search Tree", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(h)", timeWorst: "O(h)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [5, 3, 6, 2, 4, null, 7], key: 3 }),
  defaultOptions: {},
  buildSteps: (input) => deleteBSTSteps(input.heap, input.key),
  Renderer: DeleteBSTRenderer,
};
