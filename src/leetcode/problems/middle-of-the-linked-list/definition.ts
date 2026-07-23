import type { LeetCodeProblem } from "../../types";
import type { MiddleData } from "./algorithm";
import { middleSteps } from "./algorithm";
import { CODE } from "./code";
import { MiddleRenderer } from "./MiddleRenderer";

export const middleOfLinkedListProblem: LeetCodeProblem<
  number[],
  MiddleData,
  Record<string, never>
> = {
  id: "middle-of-the-linked-list",
  number: 876,
  title: "Middle of the Linked List",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/middle-of-the-linked-list/",
  summary: "Find the middle node with fast/slow pointers.",
  prompt:
    "Given the head of a singly linked list, return the middle node. If there " +
    "are two middle nodes, return the second one.",
  topics: ["Linked List", "Two Pointers"],
  tags: ["Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 42.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5],
  defaultOptions: {},
  buildSteps: (input) => middleSteps(input),
  Renderer: MiddleRenderer,
};
