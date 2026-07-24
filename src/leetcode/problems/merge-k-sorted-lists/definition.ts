import type { LeetCodeProblem } from "../../types";
import type { MergeKData } from "./algorithm";
import { mergeKSteps } from "./algorithm";
import { CODE } from "./code";
import { MergeKRenderer } from "./MergeKRenderer";

export const mergeKSortedListsProblem: LeetCodeProblem<
  number[][],
  MergeKData,
  Record<string, never>
> = {
  id: "merge-k-sorted-lists",
  number: 23,
  title: "Merge k Sorted Lists",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/merge-k-sorted-lists/",
  summary: "Merge k sorted lists with a min-heap of heads.",
  prompt:
    "You are given k sorted linked lists. Merge them into one sorted list and " +
    "return its head. A min-heap of the current heads gives O(N log k).",
  topics: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"],
  tags: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"],
  companies: ["Bloomberg"],
  frequency: 58.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(N log k)", timeWorst: "O(N log k)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ],
  defaultOptions: {},
  buildSteps: (input) => mergeKSteps(input),
  Renderer: MergeKRenderer,
};
