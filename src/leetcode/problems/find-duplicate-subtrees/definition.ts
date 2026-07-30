import type { LeetCodeProblem } from "../../types";
import type { DuplicateSubtreesData } from "./algorithm";
import { duplicateSubtreesSteps } from "./algorithm";
import { CODE } from "./code";
import { DuplicateSubtreesRenderer } from "./DuplicateSubtreesRenderer";

interface DuplicateSubtreesInput {
  heap: (number | null)[];
}

export const findDuplicateSubtreesProblem: LeetCodeProblem<DuplicateSubtreesInput, DuplicateSubtreesData, Record<string, never>> = {
  id: "find-duplicate-subtrees",
  number: 652,
  title: "Find Duplicate Subtrees",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-duplicate-subtrees/",
  summary: "Serialize each subtree canonically; a serialization appearing twice pinpoints a duplicate subtree.",
  prompt:
    "Given the root of a binary tree, return one root node for each group of duplicate subtrees (subtrees " +
    "with the same structure and node values).",
  topics: ["Hash Table", "Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Tree", "DFS", "Hash Table"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => ({ heap: [1, 2, 3, 4, null, 2, 4, null, null, null, null, 4] }),
  defaultOptions: {},
  buildSteps: (input) => duplicateSubtreesSteps(input.heap),
  Renderer: DuplicateSubtreesRenderer,
};
