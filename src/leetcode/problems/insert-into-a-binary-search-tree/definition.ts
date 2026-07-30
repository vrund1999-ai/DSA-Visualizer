import type { LeetCodeProblem } from "../../types";
import type { InsertBSTData } from "./algorithm";
import { insertBSTSteps } from "./algorithm";
import { CODE } from "./code";
import { InsertBSTRenderer } from "./InsertBSTRenderer";

interface InsertBSTInput {
  heap: (number | null)[];
  val: number;
}

export const insertIntoBSTProblem: LeetCodeProblem<InsertBSTInput, InsertBSTData, Record<string, never>> = {
  id: "insert-into-a-binary-search-tree",
  number: 701,
  title: "Insert into a Binary Search Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
  summary: "Walk down comparing at each node; the new value goes into the first empty child that keeps BST order.",
  prompt: "Given the root of a binary search tree and a value, insert the value and return the tree's new root.",
  topics: ["Tree", "Binary Search Tree", "Binary Tree"],
  tags: ["Tree", "Binary Search Tree"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(h)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [4, 2, 7, 1, 3], val: 5 }),
  defaultOptions: {},
  buildSteps: (input) => insertBSTSteps(input.heap, input.val),
  Renderer: InsertBSTRenderer,
};
