import type { LeetCodeProblem } from "../../types";
import type { AddTwoII } from "./algorithm";
import { addTwoNumbersIISteps } from "./algorithm";
import { CODE } from "./code";
import { AddTwoIIRenderer } from "./AddTwoIIRenderer";

interface AddTwoIIInput {
  l1: number[];
  l2: number[];
}

export const addTwoNumbersIIProblem: LeetCodeProblem<AddTwoIIInput, AddTwoII, Record<string, never>> = {
  id: "add-two-numbers-ii",
  number: 445,
  title: "Add Two Numbers II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/add-two-numbers-ii/",
  summary: "Add two numbers stored most-significant-digit-first using two stacks.",
  prompt:
    "Two non-empty linked lists represent two non-negative integers, most significant " +
    "digit first. Add them and return the sum as a linked list. Digits shown as arrays.",
  topics: ["Linked List", "Math", "Stack"],
  tags: ["Linked List", "Math", "Stack"],
  companies: ["Bloomberg"],
  frequency: 46.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n + m)", timeWorst: "O(n + m)", space: "O(n + m)" },
  inputSchema: [],
  makeDefaultInput: () => ({ l1: [7, 2, 4, 3], l2: [5, 6, 4] }),
  defaultOptions: {},
  buildSteps: (input) => addTwoNumbersIISteps(input.l1, input.l2),
  Renderer: AddTwoIIRenderer,
};
