import type { LeetCodeProblem } from "../../types";
import type { SwapPairsData } from "./algorithm";
import { swapPairsSteps } from "./algorithm";
import { CODE } from "./code";
import { SwapPairsRenderer } from "./SwapPairsRenderer";

export const swapNodesInPairsProblem: LeetCodeProblem<
  number[],
  SwapPairsData,
  Record<string, never>
> = {
  id: "swap-nodes-in-pairs",
  number: 24,
  title: "Swap Nodes in Pairs",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/swap-nodes-in-pairs/",
  summary: "Swap every adjacent pair of nodes by relinking.",
  prompt:
    "Given the head of a linked list, swap every two adjacent nodes and return " +
    "the new head. You may not modify node values, only the links.",
  topics: ["Linked List", "Recursion"],
  tags: ["Linked List", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 52.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 2, 3, 4, 5],
  defaultOptions: {},
  buildSteps: (input) => swapPairsSteps(input),
  Renderer: SwapPairsRenderer,
};
