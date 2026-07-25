import type { LeetCodeProblem } from "../../types";
import type { ReverseBetweenData } from "./algorithm";
import { reverseBetweenSteps } from "./algorithm";
import { CODE } from "./code";
import { ReverseBetweenRenderer } from "./ReverseBetweenRenderer";

interface ReverseBetweenInput {
  values: number[];
  left: number;
  right: number;
}

export const reverseLinkedListIIProblem: LeetCodeProblem<ReverseBetweenInput, ReverseBetweenData, Record<string, never>> = {
  id: "reverse-linked-list-ii",
  number: 92,
  title: "Reverse Linked List II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/reverse-linked-list-ii/",
  summary: "Head-insertion reverses just the sublist between positions left and right.",
  prompt:
    "Given the head of a singly linked list and two positions left ≤ right (1-indexed), " +
    "reverse the nodes from position left to right and return the list.",
  topics: ["Linked List"],
  tags: ["Linked List"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [1, 2, 3, 4, 5], left: 2, right: 4 }),
  defaultOptions: {},
  buildSteps: (input) => reverseBetweenSteps(input.values, input.left, input.right),
  Renderer: ReverseBetweenRenderer,
};
