import type { LeetCodeProblem } from "../../types";
import type { PalindromeListData } from "./algorithm";
import { palindromeListSteps } from "./algorithm";
import { CODE } from "./code";
import { PalindromeListRenderer } from "./PalindromeListRenderer";

export const palindromeLinkedListProblem: LeetCodeProblem<
  number[],
  PalindromeListData,
  Record<string, never>
> = {
  id: "palindrome-linked-list",
  number: 234,
  title: "Palindrome Linked List",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/palindrome-linked-list/",
  summary: "Is a linked list a palindrome? (two pointers)",
  prompt:
    "Given the head of a singly linked list, return true if the sequence of " +
    "values reads the same forwards and backwards.",
  topics: ["Linked List", "Two Pointers", "Stack", "Recursion"],
  tags: ["Linked List", "Two Pointers", "Stack", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 57.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 2, 1],
  defaultOptions: {},
  buildSteps: (input) => palindromeListSteps(input),
  Renderer: PalindromeListRenderer,
};
