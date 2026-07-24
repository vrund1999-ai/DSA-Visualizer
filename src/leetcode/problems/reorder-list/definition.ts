import type { LeetCodeProblem } from "../../types";
import type { ReorderData } from "./algorithm";
import { reorderSteps } from "./algorithm";
import { CODE } from "./code";
import { ReorderRenderer } from "./ReorderRenderer";

export const reorderListProblem: LeetCodeProblem<
  number[],
  ReorderData,
  Record<string, never>
> = {
  id: "reorder-list",
  number: 143,
  title: "Reorder List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/reorder-list/",
  summary: "Weave a list into L0→Ln→L1→Ln-1… (split, reverse, merge).",
  prompt:
    "Reorder a linked list L0→L1→…→Ln into L0→Ln→L1→Ln-1→L2→Ln-2→… by rearranging " +
    "the nodes (not their values).",
  topics: ["Linked List", "Two Pointers", "Stack", "Recursion"],
  tags: ["Linked List", "Two Pointers", "Stack", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 54.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5],
  defaultOptions: {},
  buildSteps: (input) => reorderSteps(input),
  Renderer: ReorderRenderer,
};
