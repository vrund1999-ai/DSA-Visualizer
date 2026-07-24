import type { LeetCodeProblem } from "../../types";
import type { OddEvenData } from "./algorithm";
import { oddEvenSteps } from "./algorithm";
import { CODE } from "./code";
import { OddEvenRenderer } from "./OddEvenRenderer";

export const oddEvenLinkedListProblem: LeetCodeProblem<
  number[],
  OddEvenData,
  Record<string, never>
> = {
  id: "odd-even-linked-list",
  number: 328,
  title: "Odd Even Linked List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/odd-even-linked-list/",
  summary: "Group odd-position nodes before even-position ones.",
  prompt:
    "Given a linked list, group all nodes at odd positions together followed by " +
    "the nodes at even positions, preserving relative order. Use O(1) space and " +
    "O(n) time.",
  topics: ["Linked List"],
  tags: ["Linked List"],
  companies: ["Bloomberg"],
  frequency: 47.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5],
  defaultOptions: {},
  buildSteps: (input) => oddEvenSteps(input),
  Renderer: OddEvenRenderer,
};
