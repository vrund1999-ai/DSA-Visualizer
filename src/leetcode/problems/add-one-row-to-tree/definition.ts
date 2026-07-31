import type { LeetCodeProblem } from "../../types";
import type { AddRowData } from "./algorithm";
import { addRowSteps } from "./algorithm";
import { CODE } from "./code";
import { AddRowRenderer } from "./AddRowRenderer";

interface AddRowInput {
  heap: (number | null)[];
  val: number;
  depth: number;
}

export const addOneRowProblem: LeetCodeProblem<AddRowInput, AddRowData, Record<string, never>> = {
  id: "add-one-row-to-tree",
  number: 623,
  title: "Add One Row to Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/add-one-row-to-tree/",
  summary: "At each node one level above the target depth, splice in two new nodes, pushing its existing subtrees down.",
  prompt:
    "Given a binary tree, add a row of nodes with value val at the given depth. Depth 1 makes a new root; " +
    "otherwise each depth-1 node's left/right subtrees become children of the new inserted nodes.",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "DFS"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [4, 2, 6, 3, 1, 5], val: 1, depth: 2 }),
  defaultOptions: {},
  buildSteps: (input) => addRowSteps(input.heap, input.val, input.depth),
  Renderer: AddRowRenderer,
};
