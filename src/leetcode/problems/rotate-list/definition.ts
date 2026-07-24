import type { LeetCodeProblem } from "../../types";
import type { RotateListData, RotateListInput } from "./algorithm";
import { rotateListSteps } from "./algorithm";
import { CODE } from "./code";
import { RotateListRenderer } from "./RotateListRenderer";

export const rotateListProblem: LeetCodeProblem<
  RotateListInput,
  RotateListData,
  Record<string, never>
> = {
  id: "rotate-list",
  number: 61,
  title: "Rotate List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/rotate-list/",
  summary: "Rotate a linked list right by k places.",
  prompt:
    "Given the head of a linked list, rotate it to the right by `k` places (k can " +
    "exceed the list length).",
  topics: ["Linked List", "Two Pointers"],
  tags: ["Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 54.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [1, 2, 3, 4, 5], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => rotateListSteps(input),
  Renderer: RotateListRenderer,
};
