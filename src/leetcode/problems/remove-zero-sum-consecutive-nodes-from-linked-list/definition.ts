import type { LeetCodeProblem } from "../../types";
import type { ZeroSumData } from "./algorithm";
import { zeroSumSteps } from "./algorithm";
import { CODE } from "./code";
import { ZeroSumRenderer } from "./ZeroSumRenderer";

export const removeZeroSumNodesProblem: LeetCodeProblem<number[], ZeroSumData, Record<string, never>> = {
  id: "remove-zero-sum-consecutive-nodes-from-linked-list",
  number: 1171,
  title: "Remove Zero Sum Consecutive Nodes from Linked List",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/",
  summary: "A repeated running prefix sum marks a zero-sum run; map each sum to its last position and skip between.",
  prompt:
    "Repeatedly delete consecutive linked-list nodes that sum to 0 until none remain, then return the head " +
    "of the final list.",
  topics: ["Hash Table", "Linked List", "Prefix Sum"],
  tags: ["Linked List", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, -3, 3, 1],
  defaultOptions: {},
  buildSteps: (input) => zeroSumSteps(input),
  Renderer: ZeroSumRenderer,
};
