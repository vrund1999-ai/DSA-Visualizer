import type { LeetCodeProblem } from "../../types";
import type { SubtreeData } from "./algorithm";
import { subtreeSteps } from "./algorithm";
import { CODE } from "./code";
import { SubtreeRenderer } from "./SubtreeRenderer";

interface SubtreeInput {
  root: (number | null)[];
  subRoot: (number | null)[];
}

export const subtreeOfAnotherTreeProblem: LeetCodeProblem<SubtreeInput, SubtreeData, Record<string, never>> = {
  id: "subtree-of-another-tree",
  number: 572,
  title: "Subtree of Another Tree",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/subtree-of-another-tree/",
  summary: "Test each node of root as a start point and check structural + value equality with subRoot.",
  prompt:
    "Given the roots of two binary trees, return true if subRoot is a subtree of root (a node of root " +
    "plus all its descendants exactly equals subRoot).",
  topics: ["Tree", "Depth-First Search", "String Matching", "Binary Tree", "Hashing"],
  tags: ["Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => ({ root: [3, 4, 5, 1, 2], subRoot: [4, 1, 2] }),
  defaultOptions: {},
  buildSteps: (input) => subtreeSteps(input.root, input.subRoot),
  Renderer: SubtreeRenderer,
};
