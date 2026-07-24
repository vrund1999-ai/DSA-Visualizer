import type { LeetCodeProblem } from "../../types";
import type { RemoveElementsData } from "./algorithm";
import { removeElementsSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveElementsRenderer } from "./RemoveElementsRenderer";

interface RemoveElementsInput {
  values: number[];
  val: number;
}

export const removeLinkedListElementsProblem: LeetCodeProblem<RemoveElementsInput, RemoveElementsData, Record<string, never>> = {
  id: "remove-linked-list-elements",
  number: 203,
  title: "Remove Linked List Elements",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/remove-linked-list-elements/",
  summary: "A dummy head lets prev splice out every node holding the target value.",
  prompt:
    "Given the head of a linked list and an integer val, remove all nodes whose value " +
    "equals val and return the new head.",
  topics: ["Linked List", "Recursion"],
  tags: ["Linked List", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 42.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [1, 2, 6, 3, 4, 5, 6], val: 6 }),
  defaultOptions: {},
  buildSteps: (input) => removeElementsSteps(input.values, input.val),
  Renderer: RemoveElementsRenderer,
};
