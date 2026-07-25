import type { LeetCodeProblem } from "../../types";
import type { CousinsData } from "./algorithm";
import { cousinsSteps } from "./algorithm";
import { CODE } from "./code";
import { CousinsRenderer } from "./CousinsRenderer";

interface CousinsInput {
  heap: (number | null)[];
  x: number;
  y: number;
}

export const cousinsInBinaryTreeProblem: LeetCodeProblem<CousinsInput, CousinsData, Record<string, never>> = {
  id: "cousins-in-binary-tree",
  number: 993,
  title: "Cousins in Binary Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/cousins-in-binary-tree/",
  summary: "Level-order BFS checks equal depth and different parents.",
  prompt:
    "Two nodes are cousins if they have the same depth but different parents. Given the " +
    "root of a binary tree with unique values and two values x and y, return whether " +
    "their nodes are cousins. (Input shown as a heap array.)",
  topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
  tags: ["Tree", "Breadth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 37.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [1, 2, 3, 4, null, null, 5], x: 4, y: 5 }),
  defaultOptions: {},
  buildSteps: (input) => cousinsSteps(input.heap, input.x, input.y),
  Renderer: CousinsRenderer,
};
