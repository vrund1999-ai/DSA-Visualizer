import type { LeetCodeProblem } from "../../types";
import type { DedupListData } from "./algorithm";
import { dedupListSteps } from "./algorithm";
import { CODE } from "./code";
import { DedupListRenderer } from "./DedupListRenderer";

export const removeDuplicatesListProblem: LeetCodeProblem<
  number[],
  DedupListData,
  Record<string, never>
> = {
  id: "remove-duplicates-from-sorted-list",
  number: 83,
  title: "Remove Duplicates from Sorted List",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
  summary: "Delete duplicate nodes from a sorted linked list.",
  prompt:
    "Given the head of a sorted linked list, delete all duplicates so each value " +
    "appears only once, and return the list still sorted.",
  topics: ["Linked List"],
  tags: ["Linked List"],
  companies: ["Bloomberg"],
  frequency: 48.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 1, 2, 3, 3],
  defaultOptions: {},
  buildSteps: (input) => dedupListSteps(input),
  Renderer: DedupListRenderer,
};
