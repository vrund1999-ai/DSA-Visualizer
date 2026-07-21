import type { LeetCodeProblem } from "../../types";
import type { AddData } from "./algorithm";
import { addTwoNumbersSteps } from "./algorithm";
import { CODE } from "./code";
import { AddRenderer } from "./AddRenderer";

export interface AddInput {
  l1: number[];
  l2: number[];
}

export const addTwoNumbersProblem: LeetCodeProblem<
  AddInput,
  AddData,
  Record<string, never>
> = {
  id: "add-two-numbers",
  number: 2,
  title: "Add Two Numbers",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/add-two-numbers/",
  summary: "Add two numbers stored as digit linked lists.",
  prompt:
    "You are given two non-empty linked lists representing two non-negative " +
    "integers. The digits are stored in reverse order, one digit per node. Add " +
    "the two numbers and return the sum as a linked list.",
  topics: ["Linked List", "Math", "Recursion"],
  tags: ["Linked List", "Math", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 85.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ l1: [2, 4, 3], l2: [5, 6, 4] }),
  defaultOptions: {},
  buildSteps: (input) => addTwoNumbersSteps(input.l1, input.l2),
  Renderer: AddRenderer,
};
