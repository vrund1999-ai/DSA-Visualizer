import type { LeetCodeProblem } from "../../types";
import type { CopyListData, CopyNodeView } from "./algorithm";
import { copyListSteps } from "./algorithm";
import { CODE } from "./code";
import { CopyListRenderer } from "./CopyListRenderer";

export const copyListRandomPointerProblem: LeetCodeProblem<CopyNodeView[], CopyListData, Record<string, never>> = {
  id: "copy-list-with-random-pointer",
  number: 138,
  title: "Copy List with Random Pointer",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/copy-list-with-random-pointer/",
  summary: "Deep-copy a linked list with arbitrary random pointers via an old→new map.",
  prompt:
    "Each node of a linked list has a next pointer and a random pointer that may point " +
    "to any node or null. Return a deep copy of the list. (random targets shown as r→val.)",
  topics: ["Hash Table", "Linked List"],
  tags: ["Hash Table", "Linked List"],
  companies: ["Bloomberg"],
  frequency: 55.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    { val: 7, random: null },
    { val: 13, random: 0 },
    { val: 11, random: 4 },
    { val: 10, random: 2 },
    { val: 1, random: 0 },
  ],
  defaultOptions: {},
  buildSteps: (input) => copyListSteps(input),
  Renderer: CopyListRenderer,
};
