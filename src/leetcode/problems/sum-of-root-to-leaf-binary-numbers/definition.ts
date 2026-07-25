import type { LeetCodeProblem } from "../../types";
import type { RootToLeafData } from "./algorithm";
import { rootToLeafSteps } from "./algorithm";
import { CODE } from "./code";
import { RootToLeafRenderer } from "./RootToLeafRenderer";

export const sumRootToLeafProblem: LeetCodeProblem<(number | null)[], RootToLeafData, Record<string, never>> = {
  id: "sum-of-root-to-leaf-binary-numbers",
  number: 1022,
  title: "Sum of Root To Leaf Binary Numbers",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/",
  summary: "DFS each path, shifting value left and adding the node bit; sum the leaf values.",
  prompt:
    "Each root-to-leaf path in a binary tree of 0s and 1s represents a binary number (most " +
    "significant bit at the root). Return the sum of these numbers over all leaves.",
  topics: ["Tree", "Depth-First Search", "Binary Tree"],
  tags: ["Tree", "Depth-First Search", "Binary Tree"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(h)" },
  inputSchema: [],
  makeDefaultInput: () => [1, 0, 1, 0, 1, 0, 1],
  defaultOptions: {},
  buildSteps: (input) => rootToLeafSteps(input),
  Renderer: RootToLeafRenderer,
};
