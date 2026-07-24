import type { LeetCodeProblem } from "../../types";
import type { CycleIIData } from "./algorithm";
import { cycleIISteps } from "./algorithm";
import { CODE } from "./code";
import { CycleIIRenderer } from "./CycleIIRenderer";

interface CycleIIInput {
  values: number[];
  /** index the tail links back to; -1 = no cycle */
  cyclePos: number;
}

export const linkedListCycleIIProblem: LeetCodeProblem<CycleIIInput, CycleIIData, Record<string, never>> = {
  id: "linked-list-cycle-ii",
  number: 142,
  title: "Linked List Cycle II",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/linked-list-cycle-ii/",
  summary: "Floyd's algorithm finds the cycle, then walks pointers to its entry node.",
  prompt:
    "Given the head of a linked list, return the node where a cycle begins, or null if " +
    "there is none. Solve in O(1) extra space. (cyclePos marks where the tail links back.)",
  topics: ["Hash Table", "Linked List", "Two Pointers"],
  tags: ["Hash Table", "Linked List", "Two Pointers"],
  companies: ["Bloomberg"],
  frequency: 39.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ values: [3, 2, 0, -4], cyclePos: 1 }),
  defaultOptions: {},
  buildSteps: (input) => cycleIISteps(input.values, input.cyclePos),
  Renderer: CycleIIRenderer,
};
