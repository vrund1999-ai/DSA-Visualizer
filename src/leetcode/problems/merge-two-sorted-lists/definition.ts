import type { LeetCodeProblem } from "../../types";
import type { MergeListsData } from "./algorithm";
import { mergeListsSteps } from "./algorithm";
import { CODE } from "./code";
import { MergeListsRenderer } from "./MergeListsRenderer";

export interface MergeListsInput {
  l1: number[];
  l2: number[];
}

export const mergeTwoSortedListsProblem: LeetCodeProblem<
  MergeListsInput,
  MergeListsData,
  Record<string, never>
> = {
  id: "merge-two-sorted-lists",
  number: 21,
  title: "Merge Two Sorted Lists",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/merge-two-sorted-lists/",
  summary: "Splice two sorted lists into one sorted list.",
  prompt:
    "You are given the heads of two sorted linked lists `list1` and `list2`. " +
    "Merge them into one sorted list by splicing together their nodes, and " +
    "return the head of the merged list.",
  topics: ["Linked List", "Recursion"],
  tags: ["Linked List", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 72.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + m)", timeWorst: "O(n + m)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ l1: [1, 2, 4], l2: [1, 3, 4] }),
  defaultOptions: {},
  buildSteps: (input) => mergeListsSteps(input.l1, input.l2),
  Renderer: MergeListsRenderer,
};
