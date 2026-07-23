import type { LeetCodeProblem } from "../../types";
import type { CycleData, LinkedListCycleInput } from "./algorithm";
import { cycleSteps } from "./algorithm";
import { CODE } from "./code";
import { CycleRenderer } from "./CycleRenderer";

export const linkedListCycleProblem: LeetCodeProblem<
  LinkedListCycleInput,
  CycleData,
  Record<string, never>
> = {
  id: "linked-list-cycle",
  number: 141,
  title: "Linked List Cycle",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/linked-list-cycle/",
  summary: "Detect a cycle with Floyd's tortoise & hare.",
  prompt:
    "Given the head of a linked list, return true if it contains a cycle — some " +
    "node reachable again by continually following next pointers. Use O(1) space.",
  topics: ["Hash Table", "Linked List", "Two Pointers"],
  tags: ["Hash Table", "Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 55.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [3, 2, 0, -4], pos: 1 }),
  defaultOptions: {},
  buildSteps: (input) => cycleSteps(input),
  Renderer: CycleRenderer,
};
