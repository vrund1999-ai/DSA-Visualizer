import type { LeetCodeProblem } from "../../types";
import type { EvenOddData } from "./algorithm";
import { evenOddSteps } from "./algorithm";
import { CODE } from "./code";
import { EvenOddRenderer } from "./EvenOddRenderer";

export const evenOddTreeProblem: LeetCodeProblem<(number | null)[], EvenOddData, Record<string, never>> = {
  id: "even-odd-tree",
  number: 1609,
  title: "Even Odd Tree",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/even-odd-tree/",
  summary: "Per-level parity + monotonicity check via level-order BFS.",
  prompt:
    "A binary tree is even-odd if, at every even-indexed level, values are odd and " +
    "strictly increasing left-to-right, and at every odd-indexed level, values are even " +
    "and strictly decreasing. Return whether the tree qualifies. (Heap array input.)",
  topics: ["Tree", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2],
  defaultOptions: {},
  buildSteps: (input) => evenOddSteps(input),
  Renderer: EvenOddRenderer,
};
