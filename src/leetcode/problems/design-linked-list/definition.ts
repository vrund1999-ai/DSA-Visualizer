import type { LeetCodeProblem } from "../../types";
import type { LinkedListData, LinkedListOp } from "./algorithm";
import { linkedListSteps } from "./algorithm";
import { CODE } from "./code";
import { LinkedListRenderer } from "./LinkedListRenderer";

interface LinkedListInput {
  ops: LinkedListOp[];
}

export const designLinkedListProblem: LeetCodeProblem<LinkedListInput, LinkedListData, Record<string, never>> = {
  id: "design-linked-list",
  number: 707,
  title: "Design Linked List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/design-linked-list/",
  summary: "Implement get / addAtHead / addAtTail / addAtIndex / deleteAtIndex with the standard bounds rules.",
  prompt:
    "Design your own linked list supporting get(index), addAtHead(val), addAtTail(val), addAtIndex(index, " +
    "val) and deleteAtIndex(index).",
  topics: ["Linked List", "Design"],
  tags: ["Linked List", "Design"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(index) per op", timeWorst: "O(n) per op", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    ops: [
      { type: "addAtHead", val: 1 },
      { type: "addAtTail", val: 3 },
      { type: "addAtIndex", index: 1, val: 2 },
      { type: "get", index: 1 },
      { type: "deleteAtIndex", index: 1 },
      { type: "get", index: 1 },
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => linkedListSteps(input.ops),
  Renderer: LinkedListRenderer,
};
