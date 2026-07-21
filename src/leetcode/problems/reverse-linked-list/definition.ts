import type { LeetCodeProblem } from "../../types";
import type { ReverseData } from "./algorithm";
import { reverseSteps } from "./algorithm";
import { CODE } from "./code";
import { ReverseRenderer } from "./ReverseRenderer";

export const reverseLinkedListProblem: LeetCodeProblem<
  number[],
  ReverseData,
  Record<string, never>
> = {
  id: "reverse-linked-list",
  number: 206,
  title: "Reverse Linked List",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/reverse-linked-list/",
  summary: "Reverse a singly linked list by flipping pointers.",
  prompt:
    "Given the head of a singly linked list, reverse the list and return the " +
    "new head.",
  topics: ["Linked List", "Recursion"],
  tags: ["Linked List", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 64.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5],
  defaultOptions: {},
  buildSteps: (input) => reverseSteps(input),
  Renderer: ReverseRenderer,
};
