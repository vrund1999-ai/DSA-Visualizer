import type { LeetCodeProblem } from "../../types";
import type { FlattenData, RawNode } from "./algorithm";
import { flattenSteps } from "./algorithm";
import { CODE } from "./code";
import { FlattenRenderer } from "./FlattenRenderer";

export const flattenMultilevelListProblem: LeetCodeProblem<RawNode[], FlattenData, Record<string, never>> = {
  id: "flatten-a-multilevel-doubly-linked-list",
  number: 430,
  title: "Flatten a Multilevel Doubly Linked List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
  summary: "Walk the list; splice each child sub-list into the main chain right after its owner.",
  prompt:
    "A doubly linked list has an extra child pointer that may point to a separate list. " +
    "Flatten it into a single-level doubly linked list in depth-first order.",
  topics: ["Linked List", "Depth-First Search", "Doubly-Linked List"],
  tags: ["Linked List", "Depth-First Search"],
  companies: ["Bloomberg"],
  frequency: 78.8,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [
    { val: 1 },
    { val: 2 },
    {
      val: 3,
      child: [{ val: 7 }, { val: 8, child: [{ val: 11 }, { val: 12 }] }, { val: 9 }, { val: 10 }],
    },
    { val: 4 },
    { val: 5 },
    { val: 6 },
  ],
  defaultOptions: {},
  buildSteps: (input) => flattenSteps(input),
  Renderer: FlattenRenderer,
};
