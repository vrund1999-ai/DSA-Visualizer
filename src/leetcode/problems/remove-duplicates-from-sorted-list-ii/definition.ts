import type { LeetCodeProblem } from "../../types";
import type { DedupListData } from "./algorithm";
import { dedupListSteps } from "./algorithm";
import { CODE } from "./code";
import { DedupListRenderer } from "./DedupListRenderer";

export const removeDuplicatesListIIProblem: LeetCodeProblem<number[], DedupListData, Record<string, never>> = {
  id: "remove-duplicates-from-sorted-list-ii",
  number: 82,
  title: "Remove Duplicates from Sorted List II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
  summary: "Delete every node in a duplicate run, keeping only distinct values.",
  prompt:
    "Given the head of a sorted linked list, delete all nodes that have duplicate " +
    "values, leaving only values that appear exactly once. Return the resulting list.",
  topics: ["Linked List", "Two Pointers"],
  tags: ["Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 3, 4, 4, 5],
  defaultOptions: {},
  buildSteps: (input) => dedupListSteps(input),
  Renderer: DedupListRenderer,
};
